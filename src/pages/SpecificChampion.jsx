import React, { useEffect, useState,useContext } from 'react'
import {ChampionContext} from '../context/ChampionContext'
import { GrFormPreviousLink , GrFormNextLink} from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";
import axios from 'axios';
import "../App.css";

function SpecificChampion() {
  //variables para cambiar de estados
  const {champions, items, ChampionName,setChampionName} = useContext(ChampionContext)  
  const [dataChamp, setdataChamp] = useState({})
  const [Skins, setSkins] = useState([])
  const [Habilidades, setHabilidades] = useState([])

  const [SpellDesc, setSpellDesc] = useState("")
  const [SpellTitle, setSpellTitle] = useState("")
  const [pasiva, setpasiva] = useState("")
  //////////////////////////////////////

  async function getChamp()
  {
    console.log(ChampionName);
    const champ = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.7.1/data/es_ES/champion/${ChampionName}.json`)
    return champ.data.data[ChampionName]
  }

  useEffect(()=>{
    getChamp().then((data)=>
    {
      setdataChamp(data)
      data.skins?.forEach((skin,i)=>
      (
        Skins.push(skin.num)
      ))
      Habilidades.push(data.spells[0].name),
      Habilidades.push(victorString(data.spells[0].description))
      setpasiva(data.passive.image.full)
    })
  },[])

  const [CurrentIndex, setCurrentIndex] = useState(0)



  const victorString = (stringDesc) =>
  {
    var newStr = ""
    var i = 0
    stringDesc = stringDesc.split("")
    console.log(stringDesc)
    while(i<stringDesc.length)
    {
      var j=i
      if(stringDesc[i] == "<")
      { 
        while(j<stringDesc.length)
        {
          if(stringDesc[j] == ">")
          {
            j = stringDesc.length
          }
          i = i+1
          j = j+1
        }
      }
      newStr = newStr + stringDesc[i]
      i = i+1
    }
    return newStr
  }



  const prevSlide = () => 
  {
    const isFirstSlide = CurrentIndex ===0;
    const newIndex = isFirstSlide ? Skins.length -1 : CurrentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => 
  {
    const isLastSlide = CurrentIndex === Skins.length -1;
    const newIndex = isLastSlide ? 0 : CurrentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) =>
  {
    setCurrentIndex(slideIndex);
  }

  const setSpellAttributes = (title,desc) =>
  {
    setSpellTitle(title)
    setSpellDesc(victorString(desc))
  }
  return ( 
    <>
    <div className='h-screen w-screen px-5 py-5 scrollbar scrollbar-none' 
    style={
    {
      backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionName}_0.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
    <div className='bg-[#091428] rounded-lg scrollbar scrollbar-none' style={{padding:"1em 0 0 0", backgroundColor: "rgb(9 20 40 / 0.9)",overflowY: "scroll", height: "100%"}}>

        <div className="py-4">
          <h1 style={{fontSize: "4vw"}} className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 lg: dark:text-white text-center">
            {dataChamp.name}
          </h1>
          <p className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center"
          style={{fontSize: "3vw"}}>
            {dataChamp.title}
          </p>
        </div>

        <hr  style={{border: "solid 1px white"}}/>

        {/* LORE CHAMP */}
        <div className="p-6  rounded-lg content-center">
            <p style={{fontSize: "2vw"}} className=" mb-2 font-bold tracking-tight text-[#f2f2f2] dark:text-[#f2f2f2] text-center">
              Historia de {dataChamp.name}
            </p>
            <p style={{padding: "0 5em 0 5em", textAlign: "center",fontSize: "1.5vw"}} className="text-[#f2f2f2] dark:text-[#f2f2f2]">{dataChamp.lore}</p>   
        </div>
        {/* ////////// */}

        <div className='' style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)", padding:"1em 1em 1em 1em", gap: "1em", width: "100%"}}>
          {/*// SKILLS //*/}
          <div className='text-center content-center'>   
            
            <div className="p-6 rounded-lg content-center scrollbar">
              
              <p style={{fontSize: "2vw"}} className="mb-2 font-bold tracking-tight text-[#f2f2f2] dark:text-[#f2f2f2] text-center">{SpellTitle == ""? Habilidades[0] : victorString(SpellTitle)}</p>
              
              <p style={{fontSize: "1.5vw", height: "22vh",overflowY: "scroll"}} className="mb-3 scrollbar text-[#f2f2f2] dark:text-[#f2f2f2]">{SpellDesc == ""? Habilidades[1] : victorString(SpellDesc)}</p>

            </div>
            <div className='flex flex-row space-x-10 items-center' style={{justifyContent: "center"}}>
              {/* PASIVA */}
            <div className='mt-3'>
              <img src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/passive/${pasiva}`} style={{width: "4.5vw"}} className ='rounded-xl cursor-pointer skills' 
                    onClick={() => setSpellAttributes(dataChamp.passive.name, dataChamp.passive.description)}/>
            </div>
            {/* ////PASIVA///// */}
              {
                dataChamp.spells?.map((spell,i)=>(
                  <div key={i}  className='mt-3'>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${spell.image.full}`} style={{width: "4.5vw"}} className ='rounded-xl cursor-pointer skills' 
                    onClick={() => setSpellAttributes(spell.name, spell.description)}/>
                  </div>
                ))
              }
            </div>
          </div>
            {/* ////////// */}
        
          {/* /////////////////////CARROUSEL SKINS////////////////////////////// */}
          <div className='py-8 relative group' style={{width: "45vw",
                height: "45vh"}}>
            <div style={
              {
                backgroundImage : `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionName}_${Skins[CurrentIndex]}.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                width: "45vw",
                height: "45vh"}
                } className='rounded-2xl bg-center duration-500'> 
            </div>

          {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] left-20 text-2xl rounded-full bg-white/20 text-white cursor-pointer'>
                <GrFormPreviousLink size={40} onClick={prevSlide}/>
            </div>
          {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] right-20 text-2xl rounded-full bg-white/20 text-white cursor-pointer'>
              <GrFormNextLink size={40} onClick={nextSlide}/>
            </div>

            <div className='flex justify-center py-4'>
              {Skins?.map((skin,slideIndex)=>(
                <div 
                key={slideIndex} 
                className='text-2xk cursor-pointer' 
                onClick={() => goToSlide(slideIndex)}>
                  <RxDotFilled color='white'/>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* ////////////////////////////////CARROUSEL SKINS///////////////////////////////////////// */}
    </div>
    </div>
      
  </>
)
}

export default SpecificChampion