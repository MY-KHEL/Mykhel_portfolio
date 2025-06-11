import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Project } from "@/components/Projects";
import { SecondProject } from "@/components/ProjectSecond";
import { SiteNav } from "@/components/siteNav";



export default function Home() {
  return (
    <>
      <div>
        
        <SiteNav/>
        <HeroSection/>
        <About/>
        <Project/>
      <SecondProject/>
        <Footer/>

      </div>
    </>

  );
}
