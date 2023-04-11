import React,{useState,useContext} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import {ChampionContext} from '../../context/ChampionContext'
import {
  GiBloodySword,
  GiAxeSword,
  GiBorderedShield,
  GiPocketBow,
  GiSecretBook,
  GiLifeSupport,
} from "react-icons/gi";
import Modal from "../../components/Modal";
function Marksman() {
  const imagen = 'http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/'
  const {champions, items, ChampionName,setChampionName} = useContext(ChampionContext)
  const championsPjs = Object.values(champions.data)
  const [VisibilidadModal, setVisibilidadModal] = useState(false);
  const roles = [
    { rol: "Luchadores", route: "/champions/Fighter", icon: GiAxeSword },
    { rol: "Tanques", route: "/champions/Tank", icon: GiBorderedShield },
    { rol: "Magos", route: "/champions/Mage", icon: GiSecretBook },
    { rol: "Asesinos", route: "/champions/Assassin", icon: GiBloodySword },
    { rol: "Tiradores", route: "/champions/Marksman", icon: GiPocketBow },
    { rol: "Apoyos", route: "/champions/Support", icon: GiLifeSupport },
  ];

  function setFetch(pjname)
  {
    setChampionName(pjname);
    console.log(pjname)

  }


  function getTagRole(tag)
  {
      let result = false
      tag.forEach((tagrole) => {
          if(tagrole == "Marksman")
          {
            result = true;
          }
      });
      return result;
  }
  return (
    <>
     <div
        className="p-7 overflow-scroll scrollbar-none text-2xl font-semibold w-screen h-screen"
        style={{
          backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflowY: "scroll",
        }}
      >
      <div
          className="w-full rounded-lg"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1,4fr)",
            padding: "1em 1em 1em 1em",
            backgroundColor: "rgb(9 20 40 / 0.9)",
          }}
        >
          <div className="grid grid-cols-3">

<button className="bg-[#091428] text-center grid-cols-1 hover:bg-[#0397AB] hover:text-black mb-4 text-white font-bold py-2 px-4 border border-[#C89B3C] rounded" style={{fontSize: "1.5vw", width: "12.3vw"}} onClick={()=>(setVisibilidadModal(true))}>Roles</button>

<div style={{fontSize: "2.8vw"}} className="mr-auto ml-auto mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
Tiradores
</div>

</div>
          <hr style={{ border: "solid 1px white" }} />

          <div
            className="pt-6"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
          >
        {
        championsPjs?.map((pj,i)=>(   
          getTagRole(pj.tags) == true && 
          (
            <Link
                to="/champions/SpecificChampion"
                onClick={() => {
                  setFetch(pj.id);
                }}
                key={i}
                className="flex flex-row p-1 items-center bg-transparent gap-1 champs rounded-lg md:flex-row md:max-w-xl"
              >
                <img style={{
                  width: "6vw",
                }}
                  className="object-cover w-24 rounded-t-lg md:h-auto md:md:rounded-none md:rounded-l-lg"
                  src={`${imagen}${pj.image.full}`}
                  alt=""
                />
                <div className="flex flex-col justify-between p-2 leading-normal">
                  <p
                    className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    style={{ fontSize: "1.5vw" }}
                  >
                    {pj.name}
                  </p>
                  <p
                    className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                    style={{ fontSize: "1vw" }}
                  >
                    {pj.title}
                  </p>
                </div>
              </Link>
          )           
        ))
      }
      </div>
      </div>
      <Modal
          VisibilidadModal={VisibilidadModal}
          setVisibilidadModal={setVisibilidadModal}
          title="Rol de los campeones"
        >
          <div className="mt-4 flex flex-col gap-4 relative">
            {roles?.map((rol, i) => (
              <Link
                to={rol?.route}
                key={i}
                className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
              >
                <div>{React.createElement(rol?.icon, { size: 20 })}</div>

                <h2 className="whitespace-pre duration-500">{rol?.rol}</h2>
              </Link>
            ))}
          </div>
        </Modal>
      </div> 
    </>
  )
}

export default Marksman