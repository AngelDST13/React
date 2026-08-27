import { useState } from 'react';
import Header from '../components/Header';

function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div>
      <Header />
      <main style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem' }}>
        <div className="glass-card">
          <h1 style={{ color: '#38bdf8', marginBottom: '1rem' }}>Contáctanos</h1>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Agenda tu cita o realiza tu consulta directamente.</p>

          {enviado ? (
            <div style={{ background: 'rgba(34, 197, 94, 0.2)', border: '1px solid #22c55e', color: '#4ade80', padding: '1rem', borderRadius: '8px' }}>
              ¡Gracias por contactarnos, {formData.nombre}! Te responderemos pronto.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Nombre completo</label>
              <input 
                type="text" 
                className="glass-input" 
                required 
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              />

              <label style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Correo electrónico</label>
              <input 
                type="email" 
                className="glass-input" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />

              <label style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Mensaje o consulta</label>
              <textarea 
                rows="4" 
                className="glass-input" 
                required 
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
              ></textarea>

              <button type="submit" className="glass-button" style={{ width: '100%', marginTop: '1rem' }}>
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}

export default Contacto;