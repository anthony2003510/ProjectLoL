import React, { useState } from "react";
import axios from "axios";
function Yourprofile() {
  const API_KEY = `${import.meta.env.VITE_APIKEY}`;
  console.log(API_KEY);
  const [playerSearch, setplayerSearch] = useState("");
  const [summonerData, setsummonerData] = useState({});

  function searchForPlayer(event) {
    event.preventDefault();

    var APICallString = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerSearch}?api_key=${API_KEY}`;

    // var APICallString = `https://newsapi.org/v2/top-headlines/sources?category=technology&language=es&country=mx&apiKey=9c5e5bb69a724318b37911cd10c55df2`
    axios
      .get(APICallString)
      .then(function (response) {
        //console.log(response.data) //esto era response.data, recuerda anto
        setsummonerData(response.data);
        console.log(summonerData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div
        className="p-7 font-semibold overflow-scroll scrollbar-none h-screen w-screen"
        style={{
          backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // overflowY: "scroll",
        }}
      >
        <div
          className="w-full rounded-lg h-full"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1,4fr)",
            padding: "1em 1em 1em 1em",
            backgroundColor: "rgb(9 20 40 / 0.9)",
          }}
        >
          <div
            style={{ fontSize: "2.8vw" }}
            className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center"
          >
            Buscar invocador
          </div>
          <hr style={{ border: "solid 1px white" }} />

          <div className="text-center w-full">
            <form className=" items-center pt-5">
              <div className="relative">
                {/* ICONO */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>

                {/* INPUT TEXT */}
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Introduce nombre de invocador"
                  required
                  onChange={(e) => setplayerSearch(e.target.value)}
                />

                {/* BUTTON */}
                <button
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={(e) => searchForPlayer(e)}
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
          {JSON.stringify(summonerData) != "{}" ? (
            <div className="p-5 text-center">
              <h2
                style={{ fontSize: "4vw" }}
                className="mb-4leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
              >
                {summonerData.name}
              </h2>
              <img
                style={{ width: "22.5vw", height: "45vh" }}
                className=" ml-auto mr-auto md:h-auto p-5"
                src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/${summonerData.profileIconId}.png`}
                alt=""
              />
              <h2
                style={{ fontSize: "3.5vw" }}
                className="mb-4leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
              >
                Summoner level: {summonerData.summonerLevel}
              </h2>
            </div>
          ) : (
            <div
              style={{ fontSize: "2.8vw" }}
              className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center"
            >
              Busca a un jugador para buscar su información
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Yourprofile;
