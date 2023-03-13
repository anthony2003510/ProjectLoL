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
  //////////////////////////////////////

  async function getChamp()
  {
    const champ = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.4.1/data/es_ES/champion/${ChampionName}.json`)
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
      Habilidades.push(data.spells[0].description)
      console.log(Habilidades)
    })
  },[])

  const [CurrentIndex, setCurrentIndex] = useState(0)

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
    setSpellDesc(desc)
  }
  return ( 
    <>
    <div className='overflow-hidden h-screen w-screen px-64 py-16' 
    style={
    {
      backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionName}_0.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
    <div className='bg-[#091428]' style={{padding:"1em 0 0 0", backgroundColor: "rgb(9 20 40 / 0.9)"}}>

        <div className="py-4">
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            {dataChamp.name}
          </h1>
          <h5 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white text-center"
          style={{fontSize: "36px"}}>
            {dataChamp.title}
          </h5>
        </div>

        <hr  style={{border: "solid 1px white"}}/>

        {/* LORE CHAMP */}
        <div className="p-6  rounded-lg content-center">
            <p className=" mb-2 text-2xl font-bold tracking-tight text-[#f2f2f2] dark:text-[#f2f2f2] text-center">
              Historia de {ChampionName}
            </p>
            <p style={{padding: "0 5em 0 5em", textAlign: "center"}} className="font-normal text-[#f2f2f2] dark:text-[#f2f2f2]">{dataChamp.lore}</p>   
        </div>
        {/* ////////// */}

        <div className='' style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)", padding:"0 3em 0 3em", gap: "1em"}}>
          {/*// SKILLS //*/}
          <div className='grid grid-rows-2 py-16'>   
            
            <div className="p-6  rounded-lg content-center">
              <p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#f2f2f2] dark:text-[#f2f2f2] text-center">{SpellTitle == ""? Habilidades[0] : SpellTitle}</h5>
              </p>
              <p className="mb-3 font-normal text-[#f2f2f2] dark:text-[#f2f2f2]">{SpellDesc == ""? Habilidades[1] : SpellDesc}</p>   
            </div>

            <div className='flex flex-row' style={{justifyContent:"space-between"}}>
              {
                dataChamp.spells?.map((spell,i)=>(
                  <div key={i}  className='p-1.5 '>
                    <img  src={`http://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/${spell.image.full}`} className ='rounded-xl cursor-pointer skills' 
                    onClick={() => setSpellAttributes(spell.name, spell.description)}/>
                  </div>
                ))
              }
            </div>
          </div>
            {/* ////////// */}
        
          {/* /////////////////////CARROUSEL SKINS////////////////////////////// */}
          <div className='w-[620px] h-[480px] py-16 px-4 relative group'>
            <div style={
              {
                backgroundImage : `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionName}_${Skins[CurrentIndex]}.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'}
                } className='w-full h-full rounded-2xl bg-center duration-500'> 
            </div>

          {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full bg-white/20 text-white cursor-pointer'>
                <GrFormPreviousLink size={40} onClick={prevSlide}/>
            </div>
          {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full bg-white/20 text-white cursor-pointer'>
              <GrFormNextLink size={40} onClick={nextSlide}/>
            </div>

            <div className='flex top-4 justify-center py-2 '>
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