import {createContext, useState, useEffect} from 'react'
//import { json } from 'react-router-dom'
import axios from 'axios';
export const ChampionContext = createContext()

export function ChampionContextProvider({children}) {
    const urlchampions = 'http://ddragon.leagueoflegends.com/cdn/13.5.1/data/es_ES/champion.json'
    const [champions, setchampions] = useState()
    
    const [ChampionName, setChampionName] = useState("")

    const urlitems = 'http://ddragon.leagueoflegends.com/cdn/13.5.1/data/es_ES/item.json'
    const [items, setitems] = useState()



    useEffect(()=>{
        axios.get(urlitems).then((result) => setitems(result.data))
        axios.get(urlchampions).then((result) => setchampions(result.data))
    },[])
 
  return (
        <ChampionContext.Provider value={{champions,items,ChampionName,setChampionName}}>
            {children}
        </ChampionContext.Provider>
  )
}

//export default ChampionContext