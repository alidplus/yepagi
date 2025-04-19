import { collections } from '@repo/defs';
import { BaseCRUD } from '@repo/rpc.core';

export default abstract class CollectionsModel extends BaseCRUD<
	typeof collections.table,
	collections.TSelect,
	collections.TInsert,
	collections.TUpdate
> {
	protected table = collections.table;
}
