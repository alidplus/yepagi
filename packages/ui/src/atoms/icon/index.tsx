import IcoMoon, { IcoMoonProps } from "react-icomoon";
import iconSet from "./selection.json";
import { IconNames } from "./icon";
import { PropsWithChildren } from "react";

const Icon = ({ name, ...props }: Omit<IcoMoonProps, 'iconSet' | 'icon'> & { name: IconNames }) => (
  <IcoMoon width={32} iconSet={iconSet} {...props} icon={name} />
);

const IconStack = ({ children }: Required<PropsWithChildren>) => (
  <div className="flex justify-center items-center [&>svg]:absolute">{children}</div>
);

export { Icon, IconStack };