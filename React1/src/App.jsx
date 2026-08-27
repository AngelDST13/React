// Importación de componentes de React Router para manejar las rutas
import { Routes, Route } from 'react-router-dom';

// Importación de las páginas principales
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';

function App() {
  return (
    // Declaración de las rutas de la aplicación (SPA)
    <Routes>
      {/* Ruta principal que carga la página de Inicio */}
      <Route path="/" element={<Inicio />} />

      {/* Ruta secundaria que carga la página de Servicios */}
      <Route path="/servicios" element={<Servicios />} />
    </Routes>
  );
}

export default App;