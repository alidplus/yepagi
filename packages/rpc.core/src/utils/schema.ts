import { z, ZodSchema } from 'zod';

export const zGeneralSuccesResponse = z.object({ success: z.boolean() });

export type TGeneralSuccesResponse = z.infer<typeof zGeneralSuccesResponse>;

export const zQueryResponse = (res: ZodSchema) =>
	z.object({
		res,
		attachments: z.array(z.object({})),
	});

export type TQueryResponse = z.infer<ReturnType<typeof zQueryResponse>>;
