import IcoMoon, { IcoMoonProps } from "react-icomoon";
import iconSet from "./selection.json";
import type { IconNames } from "./icon";
import { PropsWithChildren } from "react";

const Icon = ({
  name,
  ...props
}: Omit<IcoMoonProps, "iconSet" | "icon" | "name"> & { name: IconNames }) => (
  <IcoMoon width={32} iconSet={iconSet} {...props} icon={name} />
);

const IconStack = ({ children }: Required<PropsWithChildren>) => (
  <div className="flex items-center justify-center [&>svg]:absolute">
    {children}
  </div>
);

export { Icon, IconStack };
