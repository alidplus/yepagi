import bcrypt from "bcryptjs";
import { BaseCRUD } from "../utils/base";
import { users } from "@repo/defs";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";

export default abstract class UsersModel extends BaseCRUD<typeof users.table, users.TSelect, users.TInsert, users.TUpdate> {
  protected table = users.table
}