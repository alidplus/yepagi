import { collections } from '@repo/defs';
import { BaseCRUD } from '../utils/base';

export default abstract class CollectionsModel extends BaseCRUD<
	typeof collections.table,
	collections.TSelect,
	collections.TInsert,
	collections.TUpdate
> {
	protected table = collections.table;
}
