import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="glass-nav" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', background: 'linear-gradient(to right, #38bdf8, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        AutoTaller Pro
      </h2>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Inicio</Link>
        <Link to="/quienes-somos" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Quiénes Somos</Link>
        <Link to="/contacto" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;