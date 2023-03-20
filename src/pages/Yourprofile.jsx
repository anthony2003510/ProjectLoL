import React, {useState} from 'react'
import axios from 'axios'
function Yourprofile() {
  const API_KEY = 'RGAPI-c9299a19-a29e-4d44-8822-a5480b91e06f'
  const [playerSearch, setplayerSearch] = useState("")
  const [summonerData, setsummonerData] = useState({})


  function searchForPlayer(event)
  {
    event.preventDefault()

    var APICallString = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerSearch}?api_key=${API_KEY}`
    
    // var APICallString = `https://newsapi.org/v2/top-headlines/sources?category=technology&language=es&country=mx&apiKey=9c5e5bb69a724318b37911cd10c55df2`
    axios.get(APICallString).then(function (response)
    {
      //console.log(response.data) //esto era response.data, recuerda anto
      setsummonerData(response.data)
      console.log(summonerData)
    }).catch(function (error)
    {
      console.log(error)
    })
  }



  return (
  <>
    <div className="">
      <div className='p-7 text-2xl font-semibold flex-1'>
          <h1>Search for your Profile</h1>
      </div>
    
      <form className="pl-2 w-96">   
          <div className="relative">
              {/* ICONO */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              
              {/* INPUT TEXT */}
              <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introduce nombre de invocador" required 
              onChange={e=> setplayerSearch(e.target.value)}/>
              
              {/* BUTTON */}
              <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={e => searchForPlayer(e)}>Buscar</button>
          </div>
      </form>

      {
        JSON.stringify(summonerData) != '{}' ? 
        <>
          <h2>{summonerData.name}</h2>
          <img src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/profileicon/${summonerData.profileIconId
}.png`} alt="" />
          <p>Summoner level: {summonerData.summonerLevel}</p>
        </> 
        :
        <>
          <div> we dont have player data</div>
        </>
      }

    </div>
  </>
  )
}

export default Yourprofile