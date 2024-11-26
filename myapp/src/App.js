import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Home from './components/Home'

function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;