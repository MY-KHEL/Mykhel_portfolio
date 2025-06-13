"use client"
import { ProfileForm } from "./Form"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Linkedin, Phone, Send, Twitter } from "lucide-react"
import Link from "next/link"
import { forwardRef, useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
export const Footer =forwardRef<HTMLDivElement,{}>((props,ref) =>{

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
        <div ref={ref} className="md:px-[120px] pb-20 pt-30 bg-black p-4 ">
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
            <div className="col-span-1 w-full flex justify-end items-center">
            <div className=" text-white/50">

                <p className="text-lg mb-4 "> Contact Me:</p>
                
               
                <div className=" md:flex gap-4 flex-col-reverse hidden  ">
                          <Link href={"www.linkedin.com/in/michael-ojo-7b8551204"} target="_blank" rel="noopener noreferrer"><Linkedin size={24} color="gray" className="inline items-center mr-4"/>LinkedIn</Link>
                        <Link href={"https://twitter.com/my_k_hel"} target="_blank" rel="noopener noreferrer"><Twitter size={24} color="gray" className="inline items-center mr-4"/>X</Link>
                          <Link href={'mailto:talk2michaelojo@gmail.com'} target="_blank" rel="noopener noreferrer"><Send size={24} color="gray" className="inline items-center mr-4"/>Gmail</Link>
                          <Link href={'https://wa.me/+2349135878494'} target="_blank" rel="noopener noreferrer"><Phone size={24} color="gray" className="inline items-center mr-4"/>Phone/Whatsapp</Link>
                          <Link href={'https://github.com/MY-KHEL'} target="_blank" rel="noopenner noreferrer">
                <Github size={24} color="gray" className="inline items-center mr-4"/>Github</Link>
                      
                  </div>
                <div className=" flex md:hidden gap-4 flex-row-reverse ">
                          <Link href={"www.linkedin.com/in/michael-ojo-7b8551204"} target="_blank" rel="noopener noreferrer"><Linkedin size={24} color="gray"/></Link>
                        <Link href={"https://twitter.com/my_k_hel"} target="_blank" rel="noopener noreferrer"><Twitter size={24} color="gray"/></Link>
                          <Link href={'mailto:talk2michaelojo@gmail.com'} target="_blank" rel="noopener noreferrer"><Send size={24} color="gray"/></Link>
                          <Link href={'https://wa.me/+2349135878494'} target="_blank" rel="noopener noreferrer"><Phone size={24} color="gray" className="inline-flex"/></Link>
                          <Link href={'https://github.com/MY-KHEL'} target="_blank" rel="noopenner noreferrer">
                <Github size={24} color="gray" className="inline"/></Link>
                      
                  </div>
            </div>
            </div>
        </div>
        <div className="text-center text-white/50 ">Copyright 2025 @ Mykhel</div>
        </div>

        </div>
        </>
    )
})