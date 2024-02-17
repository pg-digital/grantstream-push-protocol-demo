import { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  title: string;
}

export function HeroSection({ title, children }: HeroSectionProps) {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        {title}
      </h1>
      <p className="inline-block align-top max-w-[580px] text-center text-lg text-muted-foreground sm:text-xl">
        {children}
      </p>
    </section>
  );
}
