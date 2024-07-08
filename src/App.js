
// import './App.css';

import React, {useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

// import NewsItem from './Components/NewsItem';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = ()=> {
  const apiKey = process.env.REACT_APP_MEWS_API
  const [progress, setProgress] = useState(0)

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
        <NavBar  mode={mode} toggleMode={toggleMode}/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
        <Route exact path="/" element={<News mode={mode}  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={20} country="in" category="general"/>} ></Route>
             <Route exact path="/business" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={20} country="in" category="business"/>} ></Route>
             <Route exact path="/entertainment" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={20} country="in" category="entertainment"/>} ></Route>
             <Route exact path="/general" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={20} country="in" category="general"/>} ></Route>
             <Route exact path="/health" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={20} country="in" category="health"/>} ></Route>
             <Route exact path="/science" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={20} country="in" category="science"/>} ></Route>
             <Route exact path="/sports" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={20} country="in" category="sports"/>} ></Route>
             <Route exact path="/technology" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={20} country="in" category="technology"/>} ></Route>
          {/* <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>  */}
        </Routes>
        </Router>
      </div>
    )
 
}

export default App;