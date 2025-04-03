import { Store } from "@tanstack/react-store";

export const accessTokenStore = new Store<string | undefined>(undefined);