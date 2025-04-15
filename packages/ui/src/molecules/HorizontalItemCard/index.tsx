import {
  Icon,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  CardFooter,
} from "@/atoms";
import { IconNames } from "@/atoms/icon/icon";
import { PropsWithChildren } from "react";

interface IconHCardProps {
  icon: IconNames;
  title: string;
  desc?: string;
}

export function HorizontalItemCard({
  icon,
  title,
  desc,
  children,
}: PropsWithChildren<IconHCardProps>) {
  return (
    <Card className="flex w-full flex-row gap-4 px-4">
      <CardHeader className="justify-center px-0">
        <Icon name={icon} size={48} />
      </CardHeader>
      <CardHeader className="min-w-0 flex-1 justify-center px-0">
        <CardTitle className="truncate">{title}</CardTitle>
        {desc && <CardDescription className="truncate">{desc}</CardDescription>}
      </CardHeader>
      {children ? (
        <CardFooter className="justify-center p-0">{children}</CardFooter>
      ) : (
        <CardFooter className="flex-row items-center p-0">
          <Button variant="ghost" size="icon">
            <Icon name="chevron-right" size={16} />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
