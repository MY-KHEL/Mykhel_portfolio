"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Send, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
gsap.registerPlugin(ScrollTrigger);

export const HeroSection=()=>{
    const screenRef = useRef(null)
   
   useEffect(() => {
    gsap.to(".whole-page",
        {
            scale:0.75,
            duration:3,
            scrollTrigger:{
                trigger:'.whole-page',
                start:'80% 40%',
                end:'bottom 20%',
                
                scrub:true

            }
        })
    
    gsap.fromTo('.box',
        { opacity: 0, x: 60 },
        {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.box'
            }
        }
    );
    gsap.to(".orbit", {
  rotate: 360,
  duration: 5,
  repeat: -1,
  ease: "linear",
  transformOrigin: "center center",
});
gsap.fromTo('.circle-image',{opacity:0,scale:0.1},{
    opacity:1,scale:1,duration:2
})
    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: screenRef.current,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });
    tl.fromTo(screenRef.current,
    { rotateX: 90, opacity: 0 },
    { rotateX: 0, opacity: 1, duration: 1 }
  )
  tl.fromTo('.hero-text',{
    opactiy:0,
    x:-60,
   

  },{
    opacity:1,
    x:0,
    
    duration:1

  }
)
 tl.fromTo('.sub-text',{opacity:0,y:30},{
    opacity:1,y:0,duration:1
 })
}, []);

    return(
        <>
        <div className=" w-full p-4 relative pb-6">
        
        <div className=" whole-page grid lg:grid-cols-2 mt-6 md:mt-18 gap-8 md:mx-20">
            <div className="">
                <h1 className="text-lg py-2 box  opacity-0" >Hey, I&apos;m Michael Ojo</h1>
                
                <div className=" p-0  relative ">
                       <div ref={screenRef}  className="absolute w-[400px] h-full z-50 bg-white overflow-hidden -left-100  opacity-0 border-r-8 border-r-sky-600 top-0"></div>
                    <div  className="opacity-0 hero-text ">
                    <h1 className="font-semibold text-6xl    md:text-[120px]">Frontend</h1>
                    <h1 className="font-semibold text-6xl  md:text-[120px]">Developer<span className="text-sky-600">.</span> </h1>
                    </div>
                </div>
                <h1 className="mt-4 text-lg sub-text opacity-0">
                    I&apos;m a frontend developer and i&apos;ll help you build beautiful and aesthestically pleasing  website your users will love 😋
                </h1>

                <div className=" w-fit sub-text opacity-0   flex items-center gap-4 mt-4 " >
                    <Button size={'lg'} > Get in Touch </Button>
                    <Button size={'lg'} variant={'secondary'} className="shadow-md"> Browse Project </Button>
                </div>
              
            </div>
            <div className="flex justify-center circle-image opacity-0  items-center">
                <div className="w-[300px] h-[300px] mx-auto border-2 border-sky-600/70 rounded-full relative">
              <div className="orbit absolute left-1/2 top-1/2 w-0 h-0">
    <div className="w-[30px] h-[30px] rounded-full bg-sky-600 absolute -left-[15px] -top-[160px]"></div>
  </div>
                </div>
            </div>
        </div>
        <div className=" hidden md:block absolute bottom-10 md:right-20">
        <div className=" flex gap-4 flex-col-reverse ">
            <Linkedin size={24} color="black"/>
            <Twitter size={24} color="black"/>
            <Send size={24} color="black"/>
        </div>
        </div>
        </div>
        </>
    )
}