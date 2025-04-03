import { users } from '@repo/defs';
import { BaseCRUD } from '../utils/base';

export default abstract class UsersModel extends BaseCRUD<typeof users.table, users.TSelect, users.TInsert, users.TUpdate> {
	protected table = users.table;
}
