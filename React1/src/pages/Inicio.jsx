import Header from '../components/Header';
import CardServicio from '../components/CardServicio';
import AlertaEstado from '../components/AlertaEstado';

function Inicio() {
  const servicios = [
    { id: 1, nombre: 'Mantenimiento Preventivo', descripcion: 'Revisión general de motor, cambio de aceite y sistema de frenos.', precio: '₡25,000' },
    { id: 2, nombre: 'Diagnóstico por Computadora', descripcion: 'Escaneo electrónico avanzado de sensores y unidades de control.', precio: '₡15,000' },
    { id: 3, nombre: 'Sistema Eléctrico y Batería', descripcion: 'Diagnóstico de alternador, batería y cableado general.', precio: '₡18,000' }
  ];

  return (
    <div>
      {/* 1. Componente Navegación */}
      <Header />
      
      <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
        {/* 2. Componente Estado/Banner */}
        <AlertaEstado mensaje="Taller abierto - Atendiendo consultas y citas en línea" tipo="exito" />

        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Servicio Automotriz de Alta Calidad</h1>
          <p style={{ color: '#94a3b8' }}>Mantenimiento profesional con tecnología de vanguardia y atención personalizada.</p>
        </div>

        <h2 style={{ marginBottom: '1rem' }}>Nuestros Servicios</h2>
        
        {/* 3. Componente CardServicio renderizado dinámicamente */}
        {servicios.map((s) => (
          <CardServicio 
            key={s.id} 
            nombre={s.nombre} 
            descripcion={s.descripcion} 
            precio={s.precio} 
          />
        ))}
      </main>

      {/* Pie de página institucional */}
      <footer style={{ textAlign: 'center', padding: '1.5rem', color: '#64748b', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        © AutoTaller Pro - Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default Inicio;