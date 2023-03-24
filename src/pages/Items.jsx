import React,{useState,useContext} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import {ChampionContext} from '../context/ChampionContext'
import Modal from '../components/Modal'
import { GiBloodySword,GiJungle,GiBorderedShield,GiBattleGear} from "react-icons/gi"

function Items() {
  const imagen = 'http://ddragon.leagueoflegends.com/cdn/13.6.1/img/item/'
  const {champions, items, pjname, changepjname} = useContext(ChampionContext)
  const itemsValues = Object.values(items.data)
  const [VisibilidadModal, setVisibilidadModal] = useState(true)

  const stats = [
    {stat: 'Daño', route:'/items/damage',icon: GiBloodySword}, 
    {stat: 'Resistencias', route:'/items/resistance',icon: GiBorderedShield}, 
    {stat: 'Jungla', route:'/items/jungle',icon: GiJungle},
    {stat: 'Otros', route:'/items/others',icon: GiBattleGear}, 
    
  ]


  // console.log(typeof itemsValues)
  // console.log(itemsValues)
  return (
   <>
    <div className='p-7 font-semibold h-screen scrollbar-none w-full rounded-lg' style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',overflowY: "scroll"}}>
    
      
    <div className='rounded-lg' style={{padding:"1em 1em 1em 1em", backgroundColor: "rgb(9 20 40 / 0.9)"}}>
    <div style={{fontSize: "3.5vw"}} className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
      OBJETOS
    </div>
    <hr  style={{border: "solid 1px white"}}/>
    
    <div className='pt-6' style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)"}}>
    {
    itemsValues?.map((item,i)=>(
        <>
        <div key={i}>
          {item.inStore !=false ?
          (<p style={{height: "17vh"}} className="flex flex-row items-center bg-transparent gap-1 champs rounded-lg md:flex-row md:max-w-xl">
          <img style={{width:"4.7vw"}} className="object-cover w-24 rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={`${imagen}${item.image.full}`} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="font-bold tracking-tight text-gray-900 dark:text-white" style={{fontSize:"1.6vw"}}>{item.name}</div>
              <div className="overflow-scroll scrollbar-none  h-14 h-min-14 font-normal text-gray-700 dark:text-gray-400" style={{fontSize:"1.2vw"}}>{item.plaintext == "" ? "No tiene descripción" : item.plaintext}</div>
          </div>
          </p>)

          :

          (<p style={{height: "17vh"}} className="flex flex-row items-center bg-transparent gap-1 champs rounded-lg md:flex-row md:max-w-xl">
          <img style={{width:"4.7vw"}} className="object-cover w-24 rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={`${imagen}${item.image.full}`} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="font-bold tracking-tight text-gray-900 dark:text-white" style={{fontSize:"1.6vw"}}>{item.name}</div>
              <div className="overflow-scroll scrollbar-none  h-14 h-min-14 font-normal text-gray-700 dark:text-gray-400" style={{fontSize:"1.2vw"}}>{item.plaintext == "" ? "No tiene descripción" : item.plaintext}</div>
          </div>
          </p>)          
          }
        </div>
        </>     
    ))
  }
    </div>
  </div>
        
      </div>
      <Modal
      VisibilidadModal={VisibilidadModal}
      setVisibilidadModal={setVisibilidadModal}
      title = "Tipo de objetos"
      >
     <div className='mt-4 flex flex-col gap-4 relative'>
        {
          stats?.map((stat,i)=>(
              <Link to={stat?.route} key={i} className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">

              <div>{React.createElement(stat?.icon, {size: 20})}</div>

              <h2 className="whitespace-pre duration-500">
                  {stat?.stat}
              </h2>


              </Link>
          ))
        }
      </div>
    </Modal>
   </>
  )
}

export default Items




{/* <a href='#' key={i} className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#091428] dark:hover:bg-gray-800">
          <img className="object-cover w-24 rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={`${imagen}${item.image.full}`} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.plaintext}</p>
          </div>
          </a> */}