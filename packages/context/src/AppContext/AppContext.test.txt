import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { renderHook } from "@testing-library/react";
import AppContext, { useTranslation } from "./AppContext";

describe("AppContext", () => {
  it("should render useTranslation with some key and get the translation value", () => {
    const { result } = renderHook(() => useTranslation(), {
      wrapper({ children }) {
        return (
          <AppContext value={{ translationMap: { exist: "this key exists" } }}>
            {children}
          </AppContext>
        );
      },
    });

    expect(typeof result.current.t).toEqual("function");
    expect(result.current.t("exist")).toEqual("this key exists");
    expect(result.current.t("not_exist")).toEqual("not_exist");
  });
});
