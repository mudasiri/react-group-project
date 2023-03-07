import './App.css';
import Navbar from './components/navbar';
import Rockets from './components/rockets';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/books" element={<Rockets />} />
        <Route path="/categories" element={<Rockets />} />
      </Routes>
    
    </>
  );
}

export default App;
