export default function HomePage() {
  return (
    <main className="flex-1">
      <div className="container relative">
        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Push Protocol Demo
          </h1>
          <p className="inline-block align-top max-w-[580px] text-center text-lg text-muted-foreground sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </div>
    </main>
  );
}
