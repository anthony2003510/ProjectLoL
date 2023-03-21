import React,{useState,useContext} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import {ChampionContext} from '../../context/ChampionContext'
function Marksman() {
  const imagen = 'http://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/'
  const {champions, items, ChampionName,setChampionName} = useContext(ChampionContext)
  const championsPjs = Object.values(champions.data)

  function setFetch(pjname)
  {
    setChampionName(pjname);
    console.log(pjname)

  }


  function getTagRole(tag)
  {
      let result = false
      tag.forEach((tagrole) => {
          if(tagrole == "Marksman")
          {
            result = true;
          }
      });
      return result;
  }
  return (
    <>
    <div className='p-7 text-2xl font-semibold h-screen' style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionName}_0.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',overflowY: "scroll"}}>
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Tiradores
      </h1>
      <div className='w-full rounded-lg' style={{display: "grid", gridTemplateColumns: "repeat(6,1fr)",padding:"1em 1em 1em 1em", backgroundColor: "rgb(9 20 40 / 0.9)"}}>
        {
        championsPjs?.map((pj,i)=>(   
          getTagRole(pj.tags) == true && 
          (
            <Link 
            to='/champions/SpecificChampion' 
            onClick={()=>
            {
              setFetch(pj.id)
            }} 
          key={i} className="flex flex-row items-center bg-transparent gap-1 champs rounded-lg md:flex-row md:max-w-xl">
            <img className="object-cover w-24 rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={`${imagen}${pj.image.full}`} alt=""/>
          <div className="flex flex-col justify-between p-2 leading-normal">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{fontSize:"22px"}}>{pj.name}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{fontSize:"18px"}}>{pj.title}</p>
            </div>
            </Link>
          )           
        ))
      }
      </div>
      </div>
    </>
  )
}

export default Marksman