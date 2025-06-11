"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import { projects } from "./data/Project"
import { Button } from "./ui/button"
gsap.registerPlugin(ScrollTrigger)


export const SecondProject = () => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)
 
  const screenRef= useRef(null)
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()
    
        const tl = gsap.timeline({
    scrollTrigger: {
      trigger: screenRef.current,
      start: "top 90%",
      end:"center 30%",
      toggleActions: "play none none none",
      scrub:true,
      
      
      

    },
  });
    tl.fromTo(screenRef.current,
    { rotateX: 90, opacity: 0 },
    { rotateX: 0, opacity: 1, duration: 2 }
  )
  tl.fromTo('.project-text',{
    opactiy:0,
    x:600,
  },{
    opacity:1,
    x:0,
    duration:5
  })
  }, [api])

  return (
    <div className=" md:hidden p-1 md:px-[120px] overflow-hidden">
      <div className="mt-15 md:mt-30">
        <div className="flex justify-end relative  ">
         <div ref={screenRef}  className="absolute w-[400px] h-full  z-50 bg-white -right-97   border-l-8 opacity-0 border-l-sky-600 top-0"></div>
          <h1 className="font-semibold text-5xl mr-4 opacity-0 project-text md:text-[100px]">
            Projects<span className="text-sky-600">.</span>
          </h1>
        </div>


        <div className=" mt-8 " >
          <Carousel  
          plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} setApi={setApi} className="w-full">
            <CarouselContent className="">
               {projects.map((project,index)=>(
                <CarouselItem key={index}>
                  <div className="">
                    <Card className="border-none shadow-md  ">
                      <CardContent className="flex items-center justify-center  ">
                        <div className="">
                            <div className="relative h-[300px]">
                                  <video width="1400" height="300" muted autoPlay loop playsInline preload="none" className="rounded-xl w-full h-full object-cover">
      <source src={project.link} type="video/mp4" />
    
      Your browser does not support the video tag.
    </video>
    <div className="absolute top-0 w-full h-full rounded-xl bg-black/70">
                <div className=" absolute bottom-3 left-2  mt-4 ">
                    <div className="text-lg font-semibold uppercase text-white"> {project.title}</div>
                                <div className=" gap-6 flex  ">
                                <Button>Demo </Button> 
                                <Button>Github </Button> 
                                </div>
                            </div></div>
                            </div>
                           
                                {/* <div className=" p-2">
                              
                            <div className=" text-lg  mt-4 ">
                                <div className=" gap-6 flex ">
                                <Button>Demo </Button> 
                                <Button>Github </Button> 
                                </div>
                            </div>
                           
                            </div> */}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
          </Carousel>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((project,index)=>(
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-sky-600 scale-125 w-4 "
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
