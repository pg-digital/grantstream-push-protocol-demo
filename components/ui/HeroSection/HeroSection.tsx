import { cn } from "@/utils";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function HeroSection({ title, children, className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-[980px] flex-col items-center gap-3 pb-8 md:pb-10",
        className
      )}
    >
      <h1 className="text-center font-extrabold tracking-tight text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="text-center max-w-[520px] lg:max-w-[580px] text-muted-foreground text-lg lg:text-xl">
        {children}
      </p>
    </section>
  );
}
