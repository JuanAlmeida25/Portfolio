import Iconos from './components/componentesIconos';
import './App.css'

const btnHabilidades = document.getElementById('btnHabilidades');
const btnExp = document.getElementById('btnExp');
const btnPersonal = document.getElementById('btnPersonal');
const Habilidades = document.getElementById('habilidadesDescript');
const expDescript = document.getElementById('expDescript');
const personalDescript = document.getElementById('personalDescript');

btnHabilidades?.addEventListener("click", () => {
  Habilidades?.classList.remove("hiddenDesc");
  Habilidades?.classList.add("activeDesc");
  expDescript?.classList.remove("activeDesc");
  expDescript?.classList.add("hiddenDesc");
  personalDescript?.classList.remove("activeDesc");
  personalDescript?.classList.add("hiddenDesc");
});
btnExp?.addEventListener("click", () => {
  expDescript?.classList.remove("hiddenDesc");
  expDescript?.classList.add("activeDesc");
  Habilidades?.classList.remove("activeDesc");
  Habilidades?.classList.add("hiddenDesc");
  personalDescript?.classList.remove("activeDesc");
  personalDescript?.classList.add("hiddenDesc");
});
btnPersonal?.addEventListener("click", () => {
  expDescript?.classList.remove("activeDesc");
  expDescript?.classList.add("hiddenDesc");
  Habilidades?.classList.remove("activeDesc");
  Habilidades?.classList.add("hiddenDesc");
  personalDescript?.classList.remove("hiddenDesc");
  personalDescript?.classList.add("activeDesc");
})

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

        <div className="title-aboutMe">
        
        <input type="button" id='btnHabilidades' className='btn-aboutMe' value='Habilidades' />
        <input type="button" id='btnExp' className='btn-aboutMe' value='Experiencia' />
        <input type="button" id='btnPersonal' className='btn-aboutMe' value='Personal' />

        </div>
        
        <section className="info-aboutMe">
          <div id='habilidadesDescript' className='habilidadesDescript hiddenDesc'>
          <h1>Habilidades</h1>
            <Iconos imagen='.\html.svg'/>
            <Iconos imagen='.\css.svg'/>
            <Iconos imagen='.\javascript.svg'/>
            <Iconos imagen='.\java.svg'/>
            <Iconos imagen='.\webdevelopment.svg'/>
            <Iconos imagen='.\basedatos.svg'/> 
            <Iconos imagen='.\controlversion.svg'/>
            <Iconos imagen='.\aplication.svg' />
          </div>
          <div id='expDescript' className='expDescript hiddenDesc'>
            <div className="carrouselExp">
              
            </div>
          </div>
          <div id='personalDescript' className='personalDescript hiddenDesc'>
          <p>Hola mundo</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
