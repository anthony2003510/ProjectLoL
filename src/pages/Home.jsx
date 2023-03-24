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
            <p style={{padding: "0 5em 0 5em", textAlign: "center",fontSize: "1.5vw"}} className="text-[#f2f2f2] dark:text-[#f2f2f2]">Bueno, para empezar, esta página esta destinada para jugadores de League of Legends, en especifico, jugadores a los que le gusta la historia de los personajes, sus aspectos, y sus habilidades, a nivel genérico. Cabe resaltar, que también podras buscar tu perfil, y los diferentes objetos de este "maravilloso" juego</p>   
        </div>


        <p style={{fontSize: "1.8vw"}} className=" mb-2 font-bold tracking-tight text-[#f2f2f2] dark:text-[#f2f2f2] text-center">
              Mapas
            </p>
            
        <div className='' style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", padding:"1em 1em 1em 1em", gap: "1em", width: "100%"}}>
          <div className='rounded-lg m-auto'>
            <h1 style={{fontSize: "2vw"}} className="mb-4 leading-none tracking-tight text-gray-900 lg: dark:text-white text-center pb-3">
              Grieta del Invocador
            </h1>
            <div>
              <img src={`http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png`} style={{width: "20vw"}} className ='rounded-xl'></img>
            </div>

          </div>

          <div className='rounded-lg m-auto'>
            <h1 style={{fontSize: "2vw"}} className="mb-4 leading-none tracking-tight text-gray-900 lg: dark:text-white text-center pb-3">
              Aram
            </h1>
            <div>
              <img src={`http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map12.png`} style={{width: "20vw"}} className ='rounded-xl'></img>
            </div>
          </div>

          <div className='rounded-lg  m-auto'>
            <h1 style={{fontSize: "2vw"}} className="mb-4 leading-none tracking-tight text-gray-900 lg: dark:text-white text-center pb-3">
              Bosque Retorcido
            </h1>
            <div>
              <img src={`http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map10.png`} style={{width: "20vw"}} className ='rounded-xl'></img>
            </div>
          </div>



        </div>

       </div>
    </div>
  )
}

export default Home