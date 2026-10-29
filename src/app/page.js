import About from "@/components/About";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkIntro from "@/components/WorkIntro";
import WorkSteps from "@/components/WorkSteps";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <WorkIntro />
        <WorkSteps />
        <Partner />
      </main>
      <SiteFooter />
    </>
  );
}
