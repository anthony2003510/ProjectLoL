import './App.css'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Champions from '../src/pages/Champions'
import Items from '../src/pages/Items'
import YourProfile from '../src/pages/Yourprofile'
import Home from '../src/pages/Home'
// ROLES
import Assassin from '../src/pages/roles/Assassin'
import Fighter from '../src/pages/roles/Fighter'
import Mage from '../src/pages/roles/Mage'
import Marksman from '../src/pages/roles/Marksman'
import Tank from '../src/pages/roles/Tank'
import Support from '../src/pages/roles/Support'

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
          <Route path='/home' exact element={<Home />}/>
          <Route path='/champions' exact element={<Champions />}/>
          <Route path='/items' exact element={<Items />}/>
          <Route path='/yourprofile' exact element={<YourProfile/>}/>

          {/* RUTAS PARA LOS ROLES */}
          <Route path='/champions/Fighter' exact element={<Fighter />}/>
          <Route path='/champions/Tank' exact element={<Tank />}/>
          <Route path='/champions/Mage' exact element={<Mage />}/>
          <Route path='/champions/Assassin' exact element={<Assassin/>}/>
          <Route path='/champions/Marksman' exact element={<Marksman/>}/>
          <Route path='/champions/Support' exact element={<Support />}/>
          <Route path='/champions/SpecificChampion' exact element={<SpecificChampion />}/>


        </Routes>
      </Router>
      
    
    </div>
  )
}

export default App
