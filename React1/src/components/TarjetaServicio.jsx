function TarjetaServicio({ titulo, descripcion, precio }) {
  return (
    <div className="glass-card" style={{ marginBottom: '1rem', padding: '1rem' }}>
      <h3 style={{ color: '#38bdf8' }}>{titulo}</h3>
      <p style={{ color: '#cbd5e1' }}>{descripcion}</p>
      <span style={{ fontWeight: 'bold', color: '#4ade80' }}>Precio: ₡{precio}</span>
    </div>
  );
}

export default TarjetaServicio;