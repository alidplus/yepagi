import { TRPCError } from "@trpc/server";

export function getTrpcError(err: unknown, mark = ''): TRPCError {
  console.log('safeThrowTrpcError', mark, err);
  
  if (err && err instanceof TRPCError) return err

  if (err && typeof err === 'string') return new TRPCError({
    code: "INTERNAL_SERVER_ERROR",
    message: err,
  });

  return new TRPCError({
    code: "INTERNAL_SERVER_ERROR",
    message: "Something went wrong",
  });
}