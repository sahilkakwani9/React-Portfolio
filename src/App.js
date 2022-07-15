import './App.css';
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/main" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
