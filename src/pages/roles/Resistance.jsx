import React,{useState,useContext} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import {ChampionContext} from '../../context/ChampionContext'


function Resistance() {
  const imagen = 'http://ddragon.leagueoflegends.com/cdn/13.6.1/img/item/'
  const {champions, items, pjname, changepjname} = useContext(ChampionContext)
  const itemsValues = Object.values(items.data)

  function getTagRole(tag)
  {
    let result = false
    tag.forEach((tagrole) => {
        if(tagrole == "SpellBlock" || tagrole == "Health" || tagrole == "HealthRegen" || tagrole == "Armor")
        {
          result = true;
        }
    });
    return result;
  }


  return (
    <div className='p-7 scrollbar-none text-2xl font-semibold h-screen w-full rounded-lg' style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',overflowY: "scroll"}}>
  <div style={{padding:"1em 1em 1em 1em", backgroundColor: "rgb(9 20 40 / 0.9)"}}>
    {/* <button>hola</button>  AQUI IRÍA EL TEMA DE PNER UN BOTON PARA QUE SALGA EL POPUP*/}
  <div style={{fontSize: "2.8vw"}} className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
    Objetos de resistencia
  </div>
  <hr  style={{border: "solid 1px white"}}/>
  
  <div className='pt-6' style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)"}}>
    {
      itemsValues?.map((item,i)=>(
        getTagRole(item.tags) == true &&
        (
          <div key={i}>
            <p style={{height: "17vh"}} className="flex flex-row items-center bg-transparent gap-1 champs rounded-lg md:flex-row md:max-w-xl">
          <img style={{width:"4.7vw"}} className="object-cover w-24 rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={`${imagen}${item.image.full}`} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="font-bold tracking-tight text-gray-900 dark:text-white" style={{fontSize:"1.2vw"}}>{item.name}</div>
              <div className="overflow-scroll scrollbar-none  h-14 h-min-14 font-normal text-gray-700 dark:text-gray-400" style={{fontSize:"1vw"}}>{item.plaintext == "" ? "No tiene descripción" : item.plaintext}</div>
          </div>
          </p>
          </div>
        )
      ))
      }
      </div>
      </div>
  </div>
 
  )
}
export default Resistance