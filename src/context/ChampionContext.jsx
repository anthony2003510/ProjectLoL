import {createContext, useState, useEffect} from 'react'
//import { json } from 'react-router-dom'

export const ChampionContext = createContext()

export function ChampionContextProvider({children}) {
    const urlchampions = 'http://ddragon.leagueoflegends.com/cdn/13.4.1/data/es_ES/champion.json'
    const [champions, setchampions] = useState()

    const urlitems = 'http://ddragon.leagueoflegends.com/cdn/13.4.1/data/es_ES/item.json'
    const [items, setitems] = useState()


    useEffect(()=>{
        fetch(urlchampions).then((Response) => Response.json()).then((result) => setchampions(result))
    },[])

    useEffect(()=>{
        fetch(urlitems).then((Response) => Response.json()).then((result) => setitems(result))
    },[])

   
  return (
        <ChampionContext.Provider value={{champions,items}}>
            {children}
        </ChampionContext.Provider>
  )
}

//export default ChampionContext