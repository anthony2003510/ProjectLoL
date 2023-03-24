import React,{useState,useContext} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import {ChampionContext} from '../../context/ChampionContext'
import Modal from '../../components/Modal'
import { GiBloodySword,GiJungle,GiBorderedShield,GiBattleGear} from "react-icons/gi"
function Jungleitems() {
    const imagen = 'http://ddragon.leagueoflegends.com/cdn/13.6.1/img/item/'
    const {champions, items, pjname, changepjname} = useContext(ChampionContext)
    const itemsValues = Object.values(items.data)
    const [VisibilidadModal, setVisibilidadModal] = useState(false)
  const stats = [
    {stat: 'Daño', route:'/items/damage',icon: GiBloodySword}, 
    {stat: 'Resistencias', route:'/items/resistance',icon: GiBorderedShield}, 
    {stat: 'Jungla', route:'/items/jungle',icon: GiJungle},
    {stat: 'Otros', route:'/items/others',icon: GiBattleGear}, 
    
  ]
  
    function getTagRole(tag)
    {
      let result = false
      tag.forEach((tagrole) => {
          if(tagrole == "Jungle")
          {
            result = true;
          }
      });
      return result;
    }
  
  
    return (
      <div className='p-7 text-2xl scrollbar-none font-semibold h-screen w-full rounded-lg' style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',overflowY: "scroll"}}>
    <div style={{padding:"1em 1em 1em 1em", backgroundColor: "rgb(9 20 40 / 0.9)"}}>
    <div className="grid grid-cols-3">

          <button className="bg-[#091428] text-center grid-cols-1 hover:bg-[#0397AB] hover:text-black mb-4 text-white font-bold py-2 px-4 border border-[#C89B3C] rounded" style={{fontSize: "1.5vw", width: "12.3vw"}} onClick={()=>(setVisibilidadModal(true))}>Mostrar Tipos</button>
    
          <div style={{fontSize: "2.8vw"}} className="mr-auto ml-auto mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
          Objetos de jungla
          </div>

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
    </div>
   
    )
}

export default Jungleitems