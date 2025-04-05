import React from 'react';

export const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header style={styles.header}>
        <h1>Camila Rojas</h1>
        <p>Tu camino hacia una vida más saludable comienza aquí</p>
      </header>

      <section style={styles.hero}>
        <h2>Mantente en forma, mantente fuerte</h2>
        <p>Entrenamiento personalizado y asesoramiento nutricional para ayudarte a alcanzar tus objetivos.</p>
        <button onClick={scrollToContact} style={styles.button}>Comenzar</button>
      </section>

      <section style={styles.section}>
        <h2>Sobre Camila</h2>
        <p>Entrenadora personal certificada con años de experiencia en fitness y asesoramiento nutricional.</p>
      </section>

      <section style={styles.section}>
        <h2>Servicios</h2>
        <ul style={styles.list}>
          <li>Entrenamiento Personal</li>
          <li>Coaching Online</li>
          <li>Planes de Nutrición</li>
          <li>Sesiones Grupales</li>
        </ul>
      </section>

      <section style={styles.section} id="contact">
        <h2>Contáctame</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Tu Nombre" required style={styles.input} />
          <input type="email" placeholder="Tu Correo" required style={styles.input} />
          <textarea placeholder="Tu Mensaje" required style={styles.input}></textarea>
          <button type="submit" style={styles.button}>Enviar Mensaje</button>
        </form>
      </section>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '20px',
    color: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  hero: {
    background: `url('https://source.unsplash.com/1600x900/?fitness') no-repeat center center/cover`,
    padding: '100px 20px',
    color: '#333',
    textShadow: '2px 2px 5px rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    padding: '10px 20px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.2em',
    borderRadius: '5px',
  },
  section: {
    padding: '50px 20px',
    backgroundColor: 'white',
    color: '#333',
    textAlign: 'center',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  form: {
    maxWidth: '400px',
    margin: 'auto',
  },
};