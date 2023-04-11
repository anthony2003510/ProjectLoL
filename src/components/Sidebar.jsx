import {BiMenuAltRight} from "react-icons/bi";
import React,{ useState }  from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import { HiLightningBolt, HiUsers, HiBeaker, } from "react-icons/hi";
import { GiFireSpellCast } from "react-icons/gi";

import { AiFillHome } from "react-icons/ai";
function Sidebar() {
    function handlerOpen()
    {
        setOpen(!open)
    }

    const mypages = [
        {
            name: "Inicio",
            link: "/home",
            icon:  AiFillHome
        },
        {
           name: "Campeones",
           link: "/champions",
           icon:  HiLightningBolt
        },
        {
            name: "Objetos",
            link: "/items",
            icon:  HiBeaker
        },
        {
            name: "Hechizos de invocador",
            link: "/summoners",
            icon:  GiFireSpellCast
        },
        {
            name: "Buscar Invocador",
            link: "/yourprofile",
            icon:  HiUsers
        }
        
    ];
    const [open, setOpen] = useState(true);
    return (
        <>
        <div className={`bg-[#091428] min-h-screen ${open ?'w-60' :'w-16'} duration-500 text-[#f2f2f2] px-4`}>
        <div className="py-3 flex justify-end">
            <BiMenuAltRight size={26}
            className="cursor-pointer" 
            onClick={handlerOpen}
            />
        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
            {
            mypages?.map((page,i)=>(
                <Link to ={page?.link} key={i} className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">

                    <div>{React.createElement(page?.icon, {size: 20})}</div>

                    <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                    style={{
                        transitionDelay:`${i + 3}00ms`
                    }}>
                        {page?.name}
                    </h2>

                    <h2 className={`${open && 'hidden'} absolute left-48 bg-[#f2f2f2] font-semibold whitespace-pre text-[#020202] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                        {page?.name}
                    </h2>
                </Link>

            ))
            }
        </div>

    </div>
    </>
    )
}

export default Sidebar