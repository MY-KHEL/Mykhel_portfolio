import { Github } from "lucide-react"
import { Navigation } from "./Navbar"

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
                <Github size={24} color="black" className="inline"/>
            </div>
        </div>
        
        </>
    )
}