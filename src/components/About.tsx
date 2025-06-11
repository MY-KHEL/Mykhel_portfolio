"use client"


import Autoscroll from "embla-carousel-auto-scroll"

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { Button } from "./ui/button"
gsap.registerPlugin(ScrollTrigger)


export const About = () => {
    const screenRef = useRef(null)
  

    const skills = ['ReactJs', 'Tailwindcss', 'Javascript', 'Typescript', 'NextJs', 'Framermotion', 'gsap', 'git', 'github', 'HTML5', 'CSS3','Vercel','Jwt/OAuth','seo']


    useEffect(()=>{
     gsap.to(".about-page",
            {
                scale:0.75,
                duration:3,
                scrollTrigger:{
                    trigger:'.about-page',
                    start:'bottom 40%',
                    end:'bottom 20%',
                   
                    scrub:true
    
                }
            })

    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: screenRef.current,
      start: "top 90%",
      end:"top 20%",
      toggleActions: "play none none none",
      scrub:true,
      

    },
  });
    tl.fromTo(screenRef.current,
    { rotateX: 90, opacity: 0 },
    { rotateX: 0, opacity: 1, duration: 2 }
  )
  tl.fromTo('.about-text',{
    opactiy:0,
    x:-600,
  },{
    opacity:1,
    x:0,
    duration:5
  })
   tl.fromTo('.about-sub-text',{opacity:0,y:50},{
    opacity:1,y:0,duration:4
 })
   tl.fromTo('.button',{opacity:0,x:-50},{
    opacity:1,x:0,duration:4
 })
    },[])
    return (
        <>
            <div className="about-page mt-4 p-4 md:mt-50 md:mx-20 pb-6">
                <div className="">
                <div className=" relative p-1">
                    <div ref={screenRef}  className="absolute w-[400px] h-full z-50 bg-white overflow-hidden -left-100  opacity-0 border-r-8 border-r-sky-600 top-0"></div>

                    <h1 className="font-semibold text-5xl about-text opacity-0 md:text-[100px]">About me<span className="text-sky-600">.</span> </h1></div>
                <div className=" lg:grid lg:grid-cols-2 md:gap-16 w-full">
            <div className=" col-span-1  w-full">
                <div className="about-sub-text">
                    <p className="mt-6 text-lg syne ">I am an experienced <b>FrontEnd Developer </b> with over <b>3+</b> experience of working with ReactJs and NextJs Framework. I can utilize Frameworks like Tailwind CSS to create aesthically pleasing website and mind-blowing Animations with the use of Framer Motion / GSAP. </p>
                    <p className="mt-3 text-lg syne">I can work with a team of developers either backend or frontend developers and also work closely and accurately with UI/UX designers </p>
                    </div>
                    <Button className="mt-4 button opacity-0"> Download Resume </Button>
                    </div>

                    <div className="col-span-1">
                            <div className="flex justify-end items-center">


                                <h1 className=" text-4xl font-semibold mt-6  relative border-b-4 border-sky-600 w-fit">SKILLS

                                </h1>

                            </div>
                            <div className="">
                                <div className="flex items-center gap-8 mt-4 md:mt-8  ">
                                    <Carousel

                                        className="  w-full p-1 "
                                        plugins={[
                                            Autoscroll({
 speed:2,
                                            }),
                                        ]}
                                        opts={{
                                            loop: true,

                                        }}
                                    >
                                        <CarouselContent>
                                            {skills.map((skill, index) => (
                                                <CarouselItem key={index} className=" basis-1/2 md:basis-1/3  ">

                                                    <div className="flex  bg-zinc-300 rounded-2xl py-2  items-center justify-center" key={index}>
                                                        <h1 className="text-md text-center font-semibold uppercase">{skill}</h1>
                                                    </div>


                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>

                                    </Carousel>
                                </div>
                                <div className="flex items-center gap-8  mt-2 ">
                                    <Carousel
                                        className="  w-full p-1 "
                                        plugins={[
                                            Autoscroll({
                                                direction: 'backward',
                                                speed:2,
                                            }),
                                        ]}
                                        opts={{
                                            loop: true,

                                        }}
                                    >
                                        <CarouselContent>
                                            {skills.map((skill, index) => (
                                                <CarouselItem key={index} className=" basis-1/2 md:basis-1/3  ">

                                                    <div className="flex  bg-zinc-300 rounded-2xl py-2  items-center justify-center" key={index}>
                                                        <h1 className="text-md text-center font-semibold uppercase">{skill}</h1>
                                                    </div>



                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>

                                    </Carousel>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}