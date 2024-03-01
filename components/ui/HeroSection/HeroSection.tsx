import { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  title: string;
}

export function HeroSection({ title, children }: HeroSectionProps) {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-3 pb-8 md:pb-10">
      <h1 className="text-center font-extrabold tracking-tight scroll-m-20 text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="text-center max-w-[580px] text-muted-foreground text-xl">
        {children}
      </p>
    </section>
  );
}
