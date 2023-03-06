import React, { useEffect, useState,useContext } from 'react'
import {ChampionContext} from '../context/ChampionContext'
import NameTitle from '../components/champs/NameTitle'
function SpecificChampion() {
  const {champions, items, ChampionName,setChampionName} = useContext(ChampionContext)  
  const [dataChamp, setdataChamp] = useState({})
  const [Skins, setSkins] = useState([])

  async function getChamp()
  {
    const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.4.1/data/es_ES/champion/${ChampionName}.json`)
    let champ = await response.json()
    return champ.data[ChampionName]
  }

  useEffect(()=>{
    getChamp().then((data)=>
    {
      setdataChamp(data)
      data.skins?.forEach((skin,i)=>
      (
        Skins.push(skin.num)
      ))
        console.log(Skins)
    })
  },[])
  return (
    
  <>
  <div className='overflow-hidden h-screen w-screen opacity-80' 
  style={
    {
      backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionName}_0.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
    }>

    <div className="">
      <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white italic underline decoration-white text-center font-outline-2">{dataChamp.title}</h2>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center font-outline-2"
      >{dataChamp.name}</h1>
    </div>
{/* ///////////////////////////////////////////////////////////////////////////// */}
  
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
      <div style={
        {
          backgroundImage : `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionName}_5.jpg)`
        }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
    {/* Left Arrow */}

    {/* Right Arrow */}

    </div>
  {/* ///////////////////////////////////////////////////////////////////////////// */}
  </div>


  </>
  )
}

export default SpecificChampion