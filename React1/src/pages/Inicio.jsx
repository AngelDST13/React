import Header from '../components/Header';
import CardServicio from '../components/CardServicio';

function Inicio() {
  const serviciosDestacados = [
    { id: 1, nombre: 'Mantenimiento Preventivo', descripcion: 'Revisión general de motor, fluidos y frenos.', precio: '₡25,000' },
    { id: 2, nombre: 'Diagnóstico Electrónico', descripcion: 'Escaneo completo de sensores y computadora.', precio: '₡15,000' }
  ];

  return (
    <div>
      <Header titulo="AutoTaller - Panel Principal" />
      <main style={{ padding: '2rem' }}>
        <h1>Bienvenido a AutoTaller</h1>
        <p>Gestión de servicios y atención especializada.</p>
        
        <h2>Servicios Destacados</h2>
        {serviciosDestacados.map((servicio) => (
          <CardServicio 
            key={servicio.id}
            nombre={servicio.nombre}
            descripcion={servicio.descripcion}
            precio={servicio.precio}
          />
        ))}
      </main>
    </div>
  );
}

export default Inicio;