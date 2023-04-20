import './App.css'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom'
import Champions from '../src/pages/Champions'
import Items from '../src/pages/Items'
import YourProfile from '../src/pages/Yourprofile'
import Home from '../src/pages/Home'
import Summoners from '../src/pages/Summoners'
import Chat from './components/chat'
// ROLES
import Assassin from '../src/pages/roles/Assassin'
import Fighter from '../src/pages/roles/Fighter'
import Mage from '../src/pages/roles/Mage'
import Marksman from '../src/pages/roles/Marksman'
import Tank from '../src/pages/roles/Tank'
import Support from '../src/pages/roles/Support'

//ITEMS STATS
import Damage from '../src/pages/roles/Damage'
import Othersitems from '../src/pages/roles/Othersitems'
import Resistance from '../src/pages/roles/Resistance'
import Jungleitems from '../src/pages/roles/Jungleitems'



import {ChampionContext} from './context/ChampionContext'
import { useContext } from 'react'
import SpecificChampion from './pages/SpecificChampion'
function App() {
  const {champions,items,ChampionName,setChampionName} = useContext(ChampionContext)
  return (
    <div className='flex'>
      <Router>
        <Sidebar />
        <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />}/>
        <Route
          path="*"
          element={<Navigate to="/" replace={true} />}
        />
          <Route path='/home' exact element={<Home />}/>
          <Route path='/champions' exact element={<Champions />}/>
          <Route path='/items' exact element={<Items />}/>
          <Route path='/yourprofile' exact element={<YourProfile/>}/>
          <Route path='/summoners' exact element={<Summoners/>}/>
          <Route path='/chat' exact element={<Chat/>}/>

          {/* RUTAS PARA LOS ROLES */}
          <Route path='/champions/Fighter' exact element={<Fighter />}/>
          <Route path='/champions/Tank' exact element={<Tank />}/>
          <Route path='/champions/Mage' exact element={<Mage />}/>
          <Route path='/champions/Assassin' exact element={<Assassin/>}/>
          <Route path='/champions/Marksman' exact element={<Marksman/>}/>
          <Route path='/champions/Support' exact element={<Support />}/>
          <Route path='/champions/SpecificChampion' exact element={<SpecificChampion />}/>

          {/* RUTAS PARA LOS OBJETOS */}
          <Route path='/items/damage' exact element={<Damage/>}/>
          <Route path='/items/resistance' exact element={<Resistance />}/>
          <Route path='/items/others' exact element={<Othersitems />}/>
          <Route path='/items/jungle' exact element={<Jungleitems />}/>

        </Routes>
      </Router>
      
    
    </div>
  )
}

export default App
