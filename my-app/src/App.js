import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import NavTabs from './components/NavTabs'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <NavTabs/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contact/*" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
