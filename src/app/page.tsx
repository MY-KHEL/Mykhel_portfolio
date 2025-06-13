"use client"
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Project } from "@/components/Projects";
import { SecondProject } from "@/components/ProjectSecond";
import { SiteNav } from "@/components/siteNav";
import { useRef } from "react";



export default function Home() {
  const projectRef = useRef<HTMLDivElement |null>(null);
  const secondProjectRef = useRef<HTMLDivElement |null>(null);
  const footerRef =useRef<HTMLDivElement |null>(null)
  return (
    <>
      <div>
        
        <SiteNav/>
        <HeroSection onScrollToAbout={()=>projectRef.current?.scrollIntoView({behavior:'smooth'})} onScrollToFooter={()=>footerRef.current?.scrollIntoView({behavior:'smooth'})} onScrollToProject={()=>secondProjectRef.current?.scrollIntoView({behavior:'smooth'})} />
        <About />
        <Project ref={projectRef}/>
      <SecondProject ref={secondProjectRef}/>
        <Footer ref={footerRef}/>

      </div>
    </>

  );
}
