import { RuleGroupType } from "react-querybuilder";
import { superjson } from "@repo/utils/superjson";

export { formatQuery } from './lib/format'
export type { FormatQueryOptions } from './lib/format'
export const encode = (rq: RuleGroupType) =>
  Buffer.from(superjson.stringify(rq), "utf-8");
export const decode = (bf: ReturnType<typeof encode>) =>
  superjson.parse(bf.toString("utf-8"));

export type RuleGroup = RuleGroupType;
export type { Field } from "react-querybuilder";
