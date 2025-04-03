import React, { useCallback, useContext } from "react";
import * as defs from "@repo/defs";

export interface AppContext {
  translationMap: Record<string, string>;
  me?: defs.users.TSelect
}

const AppContextValue: AppContext = {
  translationMap: {},
};

export const AppContext = React.createContext(AppContextValue);

export const useAppContext = () => useContext(AppContext);

export const useTranslation = () => {
  const ctx = useAppContext();
  const t = useCallback(
    (key: string) => {
      return key in ctx.translationMap ? ctx.translationMap[key] : key;
    },
    [ctx],
  );
  return { t };
};

export const useMe = () => {
  const ctx = useAppContext();
  return ctx.me
};
