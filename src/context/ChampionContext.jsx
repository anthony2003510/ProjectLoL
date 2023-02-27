import {createContext, useState, useEffect} from 'react'
//import { json } from 'react-router-dom'

export const ChampionContext = createContext()

export function ChampionContextProvider({children}) {
    const url = 'http://ddragon.leagueoflegends.com/cdn/13.4.1/data/es_ES/champion.json'
    const [data, setdata] = useState()

    useEffect(()=>{
        fetch(url).then((Response) => Response.json()).then((result) => setdata(result))
    },[])

    // fetch('http://ddragon.leagueoflegends.com/cdn/13.4.1/data/es_ES/champion.json').then((Response) => Response.json()).then((result) => setdata(result))
    // me hace como un bucle infinito y no se por que

    // async function getData()
    // {
    //     try {
    //         const response = await fetch(url)
    //         setdata(await response.json())
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // getData()
    // me hace como un bucle infinito y no se por que
  return (
        <ChampionContext.Provider value={data}>
            {children}
        </ChampionContext.Provider>
  )
}

//export default ChampionContext