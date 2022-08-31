import './App.css';
import Navbar from './components/Navbar';
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
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
