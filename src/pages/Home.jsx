import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
function Home() {
  return (
    <div className='h-screen w-screen px-5 py-5 scrollbar scrollbar-none' 
    style={
    {
      backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_5.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
       <div className='bg-[#091428] rounded-lg scrollbar scrollbar-none' style={{padding:"1em 0 0 0", backgroundColor: "rgb(9 20 40 / 0.9)",overflowY: "scroll", height: "100%"}}>

       <div className="py-4">
          <h1 style={{fontSize: "4vw"}} className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 lg: dark:text-white text-center">
            ¡Sean bienvenidos a:
          </h1>
          <p className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center"
          style={{fontSize: "3vw"}}>
            Lol Wiki!
          </p>
        </div>

        <hr  style={{border: "solid 1px white"}}/>

        <div className="p-6  rounded-lg content-center">
            <p style={{fontSize: "1.8vw"}} className=" mb-2 font-bold tracking-tight text-[#f2f2f2] dark:text-[#f2f2f2] text-center">
              ¿Qué podrás encontrar por aqui?
            </p>
            <p style={{padding: "0 5em 0 5em", textAlign: "center",fontSize: "1.5vw"}} className="text-[#f2f2f2] dark:text-[#f2f2f2]">League of Legends (también conocido por sus siglas LoL), es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games. Inspirándose en Defense of the Ancients, un mapa personalizado para Warcraft III, los fundadores de Riot buscaron desarrollar un juego independiente del mismo género. Desde su lanzamiento en octubre de 2009, LoL ha sido un juego gratuito y se monetiza a través de la compra de elementos para la personalización de personajes. El juego está disponible para Microsoft Windows y macOS.</p>   
        </div>


        <p style={{fontSize: "1.8vw"}} className=" mb-2 font-bold tracking-tight text-[#f2f2f2] dark:text-[#f2f2f2] text-center">
              Mapas
            </p>
            
        <div className='' style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)", padding:"1em 1em 1em 1em", gap: "1em", width: "100%"}}>
          <Link to="https://www.youtube.com/watch?v=MBjbKT839mU" target="_blank" className='rounded-lg m-auto'>
            <h1 style={{fontSize: "2vw"}} className="mb-4 leading-none tracking-tight text-gray-900 lg: dark:text-white text-center pb-3">
              Grieta del Invocador
            </h1>
            <div>
              <img src={`http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png`} style={{width: "20vw"}} className ='rounded-xl'></img>
            </div>

          </Link>

          <Link to="https://www.youtube.com/watch?v=QeMXHrTH7NE" target="_blank" className='rounded-lg m-auto'>
            <h1 style={{fontSize: "2vw"}} className="mb-4 leading-none tracking-tight text-gray-900 lg: dark:text-white text-center pb-3">
              Aram
            </h1>
            <div>
              <img src={`http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map12.png`} style={{width: "20vw"}} className ='rounded-xl'></img>
            </div>
          </Link>

        </div>

       </div>
    </div>
  )
}

export default Home