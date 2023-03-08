import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Rockets from './components/rockets';
import Missions from './components/missions/missions';
import MyProfil from './components/myProfile/myProfile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myProfile" element={<MyProfil />} />
      </Routes>

    </>
  );
}

export default App;
