import { cn } from "@repo/utils";


export default function AuthLayout({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
        className,
      )}
      {...props}
    >
      <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
    </div>
  );
}