import { formatQuery } from '@repo/query/server';
import { eq, sql } from 'drizzle-orm';
import { SQLiteTableWithColumns, TableConfig } from 'drizzle-orm/sqlite-core';
import { Context } from '../context';
import { TQueryRequest } from './schema';

export abstract class BaseCtrl {
	constructor(protected ctx: Context) {
		this.ctx = ctx;
	}
}

export abstract class CRUD<Select, Insert, Patch> {
	abstract create(data: Insert): Promise<Select>;
	abstract read(id: number): Promise<Select | undefined>;
	abstract list(input: TQueryRequest): Promise<Select[]>;
	abstract update(id: number, data: Patch): Promise<Select | undefined>;
	abstract delete(id: number): Promise<Select>;
	// abstract query(filters: unknown): Promise<Select[]>;
}

export abstract class BaseCRUD<T extends SQLiteTableWithColumns<TableConfig>, Select, Insert, Patch>
	extends BaseCtrl
	implements CRUD<Select, Insert, Patch>
{
	protected abstract table: T;

	async create(data: Insert): Promise<Select> {
		const res = (await this.ctx.db
			.insert(this.table)
			.values(data as any)
			.returning()) as unknown as Select[];
		if (!res.length) throw '';
		return res[0];
	}

	async list(input: TQueryRequest): Promise<Select[]> {
		const cmd = this.ctx.db.select().from(this.table);
		if (input.query?.rules.length) {
			const whereClause = formatQuery(input.query, 'parameterized');
			console.log('whereClause', input.query, whereClause);
			const sqlTemplate: TemplateStringsArray = {
				...new Array(...whereClause.sql.split('?')),
				raw: whereClause.sql.split('?'),
			};
			cmd.where(sql(sqlTemplate, ...whereClause.params));
		}
		const data = (await cmd) as unknown as Select[];
		return data;
	}

	async read(id: number): Promise<Select> {
		const find = (await this.ctx.db.select().from(this.table).where(eq(this.table.id, id))) as Select[];
		if (!find[0]) throw '404';
		return find[0];
	}

	async update(id: number, data: Patch): Promise<Select | undefined> {
		const res = (await this.ctx.db
			.update(this.table)
			.set(data as any)
			.where(eq(this.table.id, id))
			.returning()) as unknown as Select[];
		return res[0];
	}

	async delete(id: number): Promise<Select> {
		const res = (await this.ctx.db.delete(this.table).where(eq(this.table.id, id)).returning()) as Select;
		return res;
	}
}
