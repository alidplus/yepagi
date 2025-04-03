import { z } from 'zod';

export const zGeneralSuccesResponse = z.object({ success: z.boolean() });

export type TGeneralSuccesResponse = z.infer<typeof zGeneralSuccesResponse>;
