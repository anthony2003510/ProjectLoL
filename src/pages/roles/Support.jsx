import React,{useState,useContext} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import {ChampionContext} from '../../context/ChampionContext'
function Support() {
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
          if(tagrole == "Support")
          {
            result = true;
          }
      });
      return result;
  }
  return (
    <>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen' >
        <h1>Apoyos</h1>
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
          key={i} className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#091428] dark:hover:bg-gray-800">
            <img className="object-cover w-24 rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={`${imagen}${pj.image.full}`} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pj.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{pj.title}</p>
            </div>
            </Link>
          )           
        ))
      }
      </div>
        
    </>
  )
}

export default Support