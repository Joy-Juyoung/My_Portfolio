import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Juyoung
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Lee
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto md:px-8 opacity-0 animate-fade-in-delay-3">
            Junior front-end developer passionate about building fast,
            accessible, and user-centered web apps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:scale-105 hover:bg-primary/10 transition-all duration-300"
            >
              View My Work
            </a>

            <a href="/Juyoung_Lee_CV.pdf" className="cosmic-button">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <a href="#about">
          <ArrowDown className="h-5 w-5 text-primary cursor-pointer" />
        </a>
      </div>
    </section>
  );
};
