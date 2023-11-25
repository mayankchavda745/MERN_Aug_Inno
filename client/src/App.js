import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Insight from './components/Insight';


function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/home">Home</Link>|||
      <Link to="/add">Add</Link>|||
      <Link to="/insight">Insight</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/insight" element={<Insight/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
