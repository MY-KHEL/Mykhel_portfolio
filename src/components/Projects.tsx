"use client"

import { forwardRef, useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import type { CarouselApi } from "@/components/ui/carousel"
import { Button } from "./ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects } from "./data/Project"
gsap.registerPlugin(ScrollTrigger)

export const Project = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)

  const screenRef= useRef(null)
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect() // initialize current index on mount

       gsap.to(".project-page",
            {
                scale:0.75,
                duration:3,
                scrollTrigger:{
                    trigger:'.project-page',
                    start:'bottom 40%',
                    end:'bottom 20%',
                  
                    scrub:true
    
                }
            })
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
    <div ref={ref} id="project" className= " project-page hidden md:block p-4 md:px-[120px] overflow-hidden">
      <div className="mt-15 md:mt-30">
        <div className="flex justify-end relative  ">
         <div ref={screenRef}  className="absolute w-[400px] h-full  z-50 bg-white -right-100   border-l-8 opacity-0 border-l-sky-600 top-0"></div>
          <h1 className="font-semibold text-5xl opacity-0 project-text md:text-[100px]">
            Projects<span className="text-sky-600">.</span>
          </h1>
        </div>

        <div className="p-4 mt-8 " >
          <Carousel
           opts={{
    
    loop: true,
  }}
           plugins={[
            Autoplay({
          delay: 2000,
        }),
      ]}
          setApi={setApi} className="w-full">
            <CarouselContent className="">
              {projects.map((project,index)=>(
                <CarouselItem key={index}>
                  <div className=" p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center  ">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="relative ">
                                  <video width="1400" height="300" muted autoPlay loop playsInline preload="none" className="rounded-l-xl w-full h-full object-cover">
      <source src={project.link} type="video/mp4" />
    
      Your browser does not support the video tag.
    </video>
                  <div className="absolute top-0 w-full h-full bg-black/30"></div>
                            </div>
                            <div className="flex items-center justify-center p-16">
                            <div className=" text-lg ">
                                  <p className="font-semibold uppercase ">{project.title}</p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic sed accusantium, quis molestias harum rerum deserunt assumenda unde, omnis, illo minima optio fugiat dolorum dolore laboriosam ratione distinctio. Quis?
                                <div className=" gap-6 mt-4 flex ">
                                <Button>Demo </Button> 
                                <Button>Github </Button> 
                                </div>
                            </div>
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
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
})
