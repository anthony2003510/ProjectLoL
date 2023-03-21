import React,{useState,useContext} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import {ChampionContext} from '../../context/ChampionContext'

function Jungleitems() {
    const imagen = 'http://ddragon.leagueoflegends.com/cdn/13.5.1/img/item/'
    const {champions, items, pjname, changepjname} = useContext(ChampionContext)
    const itemsValues = Object.values(items.data)
  
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
      <div>
        <h1>JUNGLE ITEMS</h1>
          {
          itemsValues?.map((item,i)=>(
            getTagRole(item.tags) == true &&
            (
              <div key={i}>
                <p style={{height: "225px"}} className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#091428] dark:hover:bg-gray-800">
                <img style={{width:"75px"}} className="object-cover w-24 rounded-t-lg h-24 md:h-auto md:w-24 md:rounded-none md:rounded-l-lg" src={`${imagen}${item.image.full}`} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{fontSize:"22px"}}>{item.name}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{fontSize:"18px"}}>{item.plaintext}</p>
                </div>
                </p>
              </div>
            )
          ))
          }
      </div>
     
    )
}

export default Jungleitems