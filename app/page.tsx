import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <section id="hero" aria-label="Home">
          <Hero />
        </section>
        <section id="projects" aria-label="Projects">
          <Projects />
        </section>
        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
