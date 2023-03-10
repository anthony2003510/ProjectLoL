import React,{useState,useContext,useEffect} from 'react'
import Modal from '../components/Modal'
import { GiBloodySword,GiAxeSword,GiBorderedShield,GiPocketBow,GiSecretBook,GiLifeSupport } from "react-icons/gi"
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {ChampionContext} from '../context/ChampionContext'

function Champions() {

  const imagen = 'http://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/'
  const {champions, items, ChampionName,setChampionName} = useContext(ChampionContext)
  const championsPjs = Object.values(champions.data)

  // console.log(typeof championsPjs)
  // console.log(championsPjs[4])



  const [VisibilidadModal, setVisibilidadModal] = useState(true)
  const roles = [
    {rol: 'Fighter', route:'/champions/Fighter',icon: GiAxeSword}, 
    {rol: 'Tank', route:'/champions/Tank',icon: GiBorderedShield}, 
    {rol: 'Mage', route:'/champions/Mage',icon: GiSecretBook}, 
    {rol: 'Assassin', route:'/champions/Assassin',icon: GiBloodySword}, 
    {rol: 'Marksman', route:'/champions/Marksman',icon: GiPocketBow}, 
    {rol: 'Support', route:'/champions/Support',icon: GiLifeSupport}
  ]

  function setFetch(pjname)
  {
    setChampionName(pjname);
    console.log(pjname)

  }

  return (
    <>

    <div className='p-7 text-2xl font-semibold h-screen' style={{display: "grid", gridTemplateColumns: "repeat(6,1fr)", overflowY: "scroll"}}>
    {/* <h1 className='p-7 text-2xl font-semibold  dark-blue' style={{color: "#091428", fontSize: "22px"}}>Campeones</h1> */}
      {
        championsPjs?.map((pj,i)=>( 
          <Link 
          to='/champions/SpecificChampion' 
          onClick={()=>
          {
            setFetch(pj.id)
          }} 
         key={i} className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#091428] dark:hover:bg-gray-800">
          <img className="object-cover w-24 rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={`${imagen}${pj.image.full}`} alt=""/>
          <div className="flex flex-col justify-between p-2 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{fontSize:"22px"}}>{pj.name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{fontSize:"18px"}}>{pj.title}</p>
          </div>
          </Link>
        ))
      }
    {/* MODAL */}
    <Modal
      VisibilidadModal={VisibilidadModal}
      setVisibilidadModal={setVisibilidadModal}
    >
      <div className='mt-4 flex flex-col gap-4 relative'>
        {
          roles?.map((rol,i)=>(
              <Link to={rol?.route} key={i} className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">

              <div>{React.createElement(rol?.icon, {size: 20})}</div>

              <h2 className="whitespace-pre duration-500">
                  {rol?.rol}
              </h2>


              </Link>
          ))
        }
      </div>
    </Modal>
  </div>
  </>
  )
}

export default Champions