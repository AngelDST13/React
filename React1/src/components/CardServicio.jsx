function CardServicio({ nombre, descripcion, precio }) {
  return (
    <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1rem', margin: '0.5rem 0', backgroundColor: '#f8fafc', color: '#0f172a' }}>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <strong>Precio estimado: {precio}</strong>
    </div>
  );
}

export default CardServicio;