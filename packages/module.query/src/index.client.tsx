'use client';
// ^-- to make sure we can mount the Provider from a server component
import { QueryBuilder, defaultOperators, RuleGroupType, type Field } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';

export { defaultOperators }
export type { Field }
export { formatQuery } from './lib/format'

export default QueryBuilder

export type RuleGroup = RuleGroupType;