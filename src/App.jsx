import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Champions from '../pages/Champions'
import Items from '../pages/Items'
import YourProfile from '../pages/Yourprofile'
import Home from '../pages/Home'
function App() {
  const [count, setCount] = useState(0)
  // const [valor, setCount] = useState(0)
  return (
    <div className='flex'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/home' exact element={<Home />}/>
          <Route path='/champions' exact element={<Champions />}/>
          <Route path='/items' exact element={<Items />}/>
          <Route path='/yourprofile' exact element={<YourProfile/>}/>
        </Routes>
      </Router>
      
    
    </div>
  )
}

export default App
