import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects'
import Resume from './components/Resume';

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
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
