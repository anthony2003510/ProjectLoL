import React,{useState} from 'react'
import Modal from '../src/components/Modal'
import { GiBloodySword,GiAxeSword,GiBorderedShield,GiPocketBow,GiSecretBook,GiLifeSupport } from "react-icons/gi"
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {ChampionContext} from '../src/context/ChampionContext'



function Champions() {

  
  const valor = useContext(ChampionContext)
  const valorPjs = Object.values(valor.data)

  // console.log(typeof valorPjs)
  // console.log(valorPjs[4])



  const [VisibilidadModal, setVisibilidadModal] = useState(true)
  const roles = [
    {rol: 'Fighter', route:'/champions/Fighter',icon: GiAxeSword}, 
    {rol: 'Tank', route:'/champions/Tank',icon: GiBorderedShield}, 
    {rol: 'Mage', route:'/champions/Mage',icon: GiSecretBook}, 
    {rol: 'Assassin', route:'/champions/Assassin',icon: GiBloodySword}, 
    {rol: 'Marksman', route:'/champions/Marksman',icon: GiPocketBow}, 
    {rol: 'Support', route:'/champions/Support',icon: GiLifeSupport}
  ]
  return (
  <div className='p-7 text-2xl font-semibold flex-1 h-screen  dark:bg-gray-800'>
    <h1>Champions</h1>
      {
        valorPjs?.map((pj,i)=>(   
          <h1 key={i} className="text-[#CDFAFA]">{pj.name}</h1>
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
  )
}

export default Champions