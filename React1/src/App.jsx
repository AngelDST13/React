// Importamos los componentes del enrutador de React Router para manejar la navegacion SPA
import { Routes, Route } from 'react-router-dom';

// Importamos la vista principal de Inicio desde la carpeta de paginas
import Inicio from './pages/Inicio';

// Importamos la vista de Quienes Somos que explica la informacion del taller
import QuienesSomos from './pages/QuienesSomos';

// Importamos la vista de Contacto que contiene el formulario interactivo
import Contacto from './pages/Contacto';

// Definimos el componente principal App que sirve como orquestador del proyecto
function App() {
  return (
    // <Routes> evalua la URL actual del navegador y renderiza solo una ruta a la vez
    <Routes>
      {/* Ruta raiz: Renderiza la pagina de Inicio al ingresar a '/' */}
      <Route path="/" element={<Inicio />} />

      {/* Ruta Quienes Somos: Muestra la vista de presentacion al ingresar a '/quienes-somos' */}
      <Route path="/quienes-somos" element={<QuienesSomos />} />

      {/* Ruta Contacto: Muestra el formulario al ingresar a '/contacto' */}
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

// Exportamos App por defecto para que pueda ser montado por main.jsx
export default App;