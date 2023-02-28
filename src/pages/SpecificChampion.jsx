import React, { useEffect } from 'react'

function SpecificChampion({name}) {
    // useEffect(()=>{
    //     fetch(`http://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion/${nombre}.json`).then((Response) => Response.json())
    // }, [])
  return (
    <div>{name}</div>
  )
}

export default SpecificChampion