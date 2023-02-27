import './App.css'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Champions from '../pages/Champions'
import Items from '../pages/Items'
import YourProfile from '../pages/Yourprofile'
import Home from '../pages/Home'
// ROLES
import Assassin from '../pages/roles/Assassin'
import Fighter from '../pages/roles/Fighter'
import Mage from '../pages/roles/Mage'
import Marksman from '../pages/roles/Marksman'
import Tank from '../pages/roles/Tank'
import Support from '../pages/roles/Support'

function App() {
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
          <Route path='/champions/Support' exact element={<Support/>}/>


        </Routes>
      </Router>
      
    
    </div>
  )
}

export default App
