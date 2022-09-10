import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Teams from './components/Teams';
import TeamLastGames from './components/TeamLastGames';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/:id" element={<TeamLastGames />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
