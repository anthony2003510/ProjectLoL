import React, { useEffect, useState,useContext } from 'react'
import {ChampionContext} from '../context/ChampionContext'
import NameTitle from '../components/champs/NameTitle'
import { GrFormPreviousLink , GrFormNextLink} from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";

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
  
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div style={
        {
          backgroundImage : `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionName}_${Skins[CurrentIndex]}.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'}
          } className='w-full h-full rounded-2xl bg-center duration-500'></div>
    {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-40 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
          <GrFormPreviousLink size={40} onClick={prevSlide}/>
      </div>
    {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-40 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
        <GrFormNextLink size={40} onClick={nextSlide} />
      </div>

      <div className='flex top-4 justify-center py-2 '>
        {Skins?.map((skin,slideIndex)=>(
          <div 
          key={slideIndex} 
          className='text-2xk cursor-pointer' 
          onClick={() => goToSlide(slideIndex)}>
            <RxDotFilled/>
          </div>
        ))}
      </div>
    </div>
  {/* ///////////////////////////////////////////////////////////////////////////// */}
  </div>


  </>
  )
}

export default SpecificChampion