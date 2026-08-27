import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;