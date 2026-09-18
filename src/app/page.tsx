import { FloatingNav } from "@/components/layout/floating-nav";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { GithubShowcase } from "@/components/sections/github-showcase";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <GithubShowcase />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
