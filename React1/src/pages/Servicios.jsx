import Header from '../components/Header';
import CardServicio from '../components/CardServicio';

function Servicios() {
  const listaServicios = [
    { id: 1, nombre: 'Cambio de Aceite y Filtro', descripcion: 'Aceite sintético de alta calidad.', precio: '₡20,000' },
    { id: 2, nombre: 'Alineación y Balanceo', descripcion: 'Ajuste de dirección y balanceo de llantas.', precio: '₡18,000' },
    { id: 3, nombre: 'Sistema de Frenos', descripcion: 'Cambio de pastillas y rectificado de discos.', precio: '₡30,000' }
  ];

  return (
    <div>
      <Header titulo="AutoTaller - Catálogo de Servicios" />
      <main style={{ padding: '2rem' }}>
        <h1>Catálogo Completo</h1>
        <p>Consulta nuestros servicios disponibles:</p>

        {listaServicios.map((s) => (
          <CardServicio 
            key={s.id}
            nombre={s.nombre}
            descripcion={s.descripcion}
            precio={s.precio}
          />
        ))}
      </main>
    </div>
  );
}

export default Servicios;