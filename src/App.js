
import './App.css';

import React, {useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
// import NewsItem from './Components/NewsItem';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#232931';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='#232931';
    }
  }

    return (
      <div>
        <Router>
          <NavBar mode={mode} toggleMode={toggleMode}/>
           <Routes>
        
             <Route exact path="/" element={<News mode={mode} key="general" pageSize={20} country="in" category="general"/>} ></Route>
             <Route exact path="/business" element={<News mode={mode} key="business" pageSize={20} country="in" category="business"/>} ></Route>
             <Route exact path="/entertainment" element={<News mode={mode} key="entertainment" pageSize={20} country="in" category="entertainment"/>} ></Route>
             <Route exact path="/general" element={<News mode={mode} key="general" pageSize={20} country="in" category="general"/>} ></Route>
             <Route exact path="/health" element={<News mode={mode} key="health" pageSize={20} country="in" category="health"/>} ></Route>
             <Route exact path="/science" element={<News mode={mode} key="science" pageSize={20} country="in" category="science"/>} ></Route>
             <Route exact path="/sports" element={<News mode={mode} key="sports" pageSize={20} country="in" category="sports"/>} ></Route>
             <Route exact path="/technology" element={<News mode={mode} key="technology" pageSize={20} country="in" category="technology"/>} ></Route>

        </Routes>
        </Router>

      </div>
    )
  }
export default App
