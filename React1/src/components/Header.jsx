import { Link } from 'react-router-dom';

function Header({ titulo }) {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#1e293b', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>{titulo}</h2>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: '#38bdf8', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/servicios" style={{ color: '#38bdf8', textDecoration: 'none' }}>Servicios</Link>
      </nav>
    </header>
  );
}

export default Header;