import type { RuleGroupType } from 'react-querybuilder';
import { z, ZodSchema } from 'zod';

export const zGeneralSuccesResponse = z.object({ success: z.boolean() });

export type TGeneralSuccesResponse = z.infer<typeof zGeneralSuccesResponse>;

export const zQueryRequest = () =>
	z.object({
		query: z.any().optional(),
	});

// export type TQueryRequest = z.infer<ReturnType<typeof zQueryRequest>>;
export type TQueryRequest = {
	query?: RuleGroupType;
};

export const zQueryResponse = (res: ZodSchema) =>
	z.object({
		res,
		attachments: z.array(z.object({})),
	});

export type TQueryResponse = z.infer<ReturnType<typeof zQueryResponse>>;
