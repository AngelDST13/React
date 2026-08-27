function CardServicio({ nombre, descripcion, precio }) {
  return (
    <div className="glass-card" style={{ marginBottom: '1rem' }}>
      <h3 style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>{nombre}</h3>
      <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>{descripcion}</p>
      <span style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', padding: '0.4rem 0.8rem', borderRadius: '6px', fontWeight: 'bold' }}>
        {precio}
      </span>
    </div>
  );
}

export default CardServicio;