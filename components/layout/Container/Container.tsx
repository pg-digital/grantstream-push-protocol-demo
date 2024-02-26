import { cn } from "@/utils";
import { ReactNode } from "react";

type Padding = "default" | "none";

type Size = "default" | "small";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  padding?: Padding;
  size?: Size;
}

export function Container({
  children,
  className,
  padding,
  size,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "container relative",
        { "p-0": padding === "none" },
        { "max-w-[620px]": size === "small" },
        className
      )}
    >
      {children}
    </div>
  );
}
