import Header from '../components/Header';

function QuienesSomos() {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <h1 style={{ color: '#38bdf8', marginBottom: '1rem' }}>Sobre Nosotros</h1>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>
            En <strong>AutoTaller Pro</strong> contamos con más de 10 años de experiencia en el sector automotriz, ofreciendo soluciones mecánicas y electrónicas con altos estándares de calidad.
          </p>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
            Nuestro compromiso es garantizar la seguridad y confiabilidad de tu vehículo mediante diagnósticos precisos y repuestos certificados.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div className="glass-card">
            <h3 style={{ color: '#818cf8', marginBottom: '0.5rem' }}>Misión</h3>
            <p style={{ color: '#94a3b8' }}>Brindar un servicio técnico transparente y eficiente garantizando la satisfacción total del cliente.</p>
          </div>
          <div className="glass-card">
            <h3 style={{ color: '#a855f7', marginBottom: '0.5rem' }}>Visión</h3>
            <p style={{ color: '#94a3b8' }}>Ser el taller de referencia regional en diagnóstico electrónico y mantenimiento integral.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default QuienesSomos;