function AlertaEstado({ mensaje, tipo = 'exito' }) {
  const esExito = tipo === 'exito';
  
  return (
    <div style={{
      background: esExito ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
      border: `1px solid ${esExito ? '#22c55e' : '#ef4444'}`,
      color: esExito ? '#4ade80' : '#f87171',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      textAlign: 'center'
    }}>
      {mensaje}
    </div>
  );
}

export default AlertaEstado;