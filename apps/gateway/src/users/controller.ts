import * as defs from "@repo/defs";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { Context } from "../context";
import UsersModel from "./model";

const users = defs.users.table

export default class UsersController extends UsersModel {
}