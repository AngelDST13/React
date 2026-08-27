import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: '#38bdf8' }}>AutoTaller Pro - Inicio</h1>
      <p>Bienvenido al sistema.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: '#fff' }}>Inicio</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;