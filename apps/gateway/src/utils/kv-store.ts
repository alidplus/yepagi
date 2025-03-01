import SuperJSON from "superjson"

export class KvStore<T = object> {
  protected prefix: string
  private ns: KVNamespace
  constructor(prefix: string, ns: KVNamespace) {
    this.prefix = process.env.NODE_ENV === 'production' ? prefix : `${prefix}:dev`
    this.ns = ns
  }
  private getFullKey(key: string) {
    return `${this.prefix}:${key}`
  }
  async get(key: string) {
    const k = this.getFullKey(key)
    const v = await this.ns.get(k, "text")
    if (v) {
      return SuperJSON.parse(v) as T
    }
    return null
  }
  async put(key: string, value: T) {
    const k = this.getFullKey(key)
    const v = SuperJSON.stringify(value)
    return this.ns.put(k, v, { expirationTtl: 720000 })
  }
}