import { Github } from "lucide-react"
import { Navigation } from "./Navbar"
import Link from "next/link"

export const SiteNav =()=>{
    return(
        <>
    <div className="flex justify-between items-center md:px-20 p-3 md:p-0 ">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold ">MYKHEL 
                </h1>
                    
                
            </div>
            <div className="hidden md:flex">
                <Navigation/>
            </div>
            <div className=" bg-gray-300/60 rounded-full p-2">
            <Link href={'https://github.com/MY-KHEL'} target="_blank" rel="noopenner noreferrer">
                <Github size={24} color="black" className="inline"/></Link>
            </div>
        </div>
        
        </>
    )
}