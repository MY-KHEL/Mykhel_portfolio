"use client"
import { ProfileForm } from "./Form"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
export const Footer =()=>{

    const screenRef= useRef(null)
    useEffect(()=>{

        
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
  tl.fromTo('.footer-text',{
    opactiy:0,
    x:-800,
  },{
    opacity:1,
    x:0,
    duration:4
  })
  tl.fromTo('.footer-sub-text',{
    opactiy:0,
    y:50,
  },{
    opacity:1,
    y:0,
    duration:4
  })
  tl.fromTo('.form',{
    opactiy:0,
    y:50,
  },{
    opacity:1,
    y:0,
    duration:4
  })
    })
    return(
        <>
        <div className="md:px-[120px] pb-20 pt-30 bg-black p-4 ">
            <div className="">
          <div className=" relative p-1">
                    <div ref={screenRef}  className="absolute w-[400px] h-full z-50 bg-black overflow-hidden -left-100  opacity-0 border-r-8 border-r-sky-600 top-0"></div>

                    <h1 className="font-semibold text-5xl text-white/50 footer-text opacity-0 md:text-[100px]">Get In Touch<span className="text-sky-600">.</span> </h1></div>

        <div className="  mt-6 grid md:grid-cols-2 gap-8 ">
            <div className="col-span-1">
                <p className="text-white/50 opacity-0 text-lg mb-6 footer-sub-text">
                i would love to turn your ideas into reality. Feel free to contact me anytime </p>
                <div className="form opacity-0">
                <ProfileForm/>
                </div>
            </div>
            <div className="flex justify-end items-center">
            <div className=" text-white/50">

                <p className="text-lg "> Contact Us:</p>
                
                                
            </div>
            </div>
        </div>
        </div>

        </div>
        </>
    )
}