import { superjson } from '@repo/utils';

const defaultOptions: KVNamespacePutOptions = {
	expirationTtl: 720000,
};

export class KvStore<T = object> {
	protected prefix: string;
	private ns: KVNamespace;
	options: KVNamespacePutOptions;
	constructor(prefix: string, ns: KVNamespace, options = defaultOptions) {
		this.prefix = prefix;
		this.ns = ns;
		this.options = options;
	}
	private getFullKey(key: string) {
		return `${this.prefix}:${key}`;
	}
	async get(key: string) {
		const k = this.getFullKey(key);
		const v = await this.ns.get(k, 'text');
		if (v) {
			return superjson.parse(v) as T;
		}
		return null;
	}
	async put(key: string, value: T) {
		const k = this.getFullKey(key);
		const v = superjson.stringify(value);
		return this.ns.put(k, v, this.options);
	}
	async drop(key: string) {
		const k = this.getFullKey(key);
		return this.ns.delete(k);
	}
}
