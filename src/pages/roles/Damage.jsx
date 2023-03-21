import React from 'react'

function Damage() {
    const imagen = 'http://ddragon.leagueoflegends.com/cdn/13.5.1/img/item/'
  const {champions, items, pjname, changepjname} = useContext(ChampionContext)
  const itemsValues = Object.values(items.data)
  return (
    <div>Damage</div>
  )
}

export default Damage