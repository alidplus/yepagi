import React, { useCallback, useContext } from "react";

export interface AppContext {
  translationMap: Record<string, string>;
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

export function uncoverFunction() {
  return "unoce";
}
