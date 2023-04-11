import React, { useEffect, useState,useContext } from 'react'
import {ChampionContext} from '../context/ChampionContext'
import { GrFormPreviousLink , GrFormNextLink} from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";
import axios from 'axios';
import "../App.css";

function Summoners() {
    const [summonsData, setsummonsData] = useState({})
    const summonsValues = Object.values(summonsData)
    console.log(summonsValues)
    async function getSummoners()
    {
        const summon = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.7.1/data/es_ES/summoner.json`)
        return summon.data.data
    }

    useEffect(()=>{
        getSummoners().then((data)=>
        {
            setsummonsData(data)
        })
      },[])

  return (
    <div
        className="p-7 font-semibold overflow-scroll scrollbar-none h-screen w-screen"
        style={{
          backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // overflowY: "scroll",
        }}
      >
        <div className='rounded-lg' style={{padding:"1em 1em 1em 1em", backgroundColor: "rgb(9 20 40 / 0.9)"}}>
            <div style={{fontSize: "2.8vw"}} className="mr-auto ml-auto mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
            Hechizos de invocador
            </div>
            <hr  style={{border: "solid 1px white"}}/>

            <div className='pt-6' style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)"}}>
                {
                   summonsValues?.map((summoner,i)=>(
                    <div key={i}>
                        <div style={{height: "17vh"}} className="flex flex-row items-center bg-transparent gap-1 champs rounded-lg md:flex-row md:max-w-xl">
                            <img style={{width:"4.5vw"}} className="object-cover w-24 rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${summoner.image.full}`} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <div className="font-bold tracking-tight text-gray-900 dark:text-white" style={{fontSize:"1vw"}}>{summoner.name}</div>
                                <div className="overflow-scroll scrollbar-none  h-14 h-min-14 font-normal text-gray-700 dark:text-gray-400" style={{fontSize:"0.8vw"}}>{summoner.description == "" ? "No tiene descripción" : summoner.description}</div>
                            </div>
                        </div>
                    </div>
                   ))
                }
            </div>
        </div>
      </div>
  )
}

export default Summoners