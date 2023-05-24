import Botones from './components/componenteBotones';
import './App.css'

function App() {

  return (
    <>
      <div>
        <div className='navegacion'>
          <h3>{"{"} Juan P. Almeida F. {"}"}</h3>
          <nav className='Navegacion'>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Contáctanos</a></li>
              <li><a href="#">Acerca de mi</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='myInfo'>
        <img src="\Yo.svg" alt="Yo" />
        <p>Hola 👋🏽, Mi nombre es Juan Almeida,<br /> Soy Desarrollador de Software y Desarrollador Web.</p>
      </div>
      <div className="aboutMe">
        <h2>{"< "}Sobre Mi{" />"}</h2>

        <div className="info-aboutMe">
          <Botones title='Habilidades'/>
          <Botones title='Experiencia'/>
          <Botones title='Personal'/>
        </div>
      </div>
    </>
  )
}

export default App
