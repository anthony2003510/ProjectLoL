import React,{useState,useContext} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import {ChampionContext} from '../../context/ChampionContext'
function Support() {
  const imagen = 'http://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/'
  const {champions, items, ChampionName,setChampionName} = useContext(ChampionContext)
  const championsPjs = Object.values(champions.data)


  function setFetch(pjname)
  {
    setChampionName(pjname);
    console.log(pjname)

  }


  function getTagRole(tag)
  {
      let result = false
      tag.forEach((tagrole) => {
          if(tagrole == "Support")
          {
            result = true;
          }
      });
      return result;
  }
  return (
    <>
     <div className='p-7 text-2xl scrollbar-none font-semibold h-screen w-screen' style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampionName}_0.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',overflowY: "scroll"}}>
      <div
          className="w-full rounded-lg"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1,4fr)",
            padding: "1em 1em 1em 1em",
            backgroundColor: "rgb(9 20 40 / 0.9)",
          }}
        >
          <div style={{fontSize: "2.8vw"}} className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
    Apoyos
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
      </div> 
    </>
  )
}

export default Support