import { formatQuery, RuleGroupTypeAny } from "react-querybuilder";
import { superjson } from "./superjson";

export const toSQL = (rq: RuleGroupTypeAny) => formatQuery(rq, "sql");
export const encode = (rq: RuleGroupTypeAny) =>
  Buffer.from(superjson.stringify(rq), "utf-8");
export const decode = (bf: ReturnType<typeof encode>) =>
  superjson.parse(bf.toString("utf-8"));

export type RuleGroup = RuleGroupTypeAny;
export type { Field } from "react-querybuilder";
