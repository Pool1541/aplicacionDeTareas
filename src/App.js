import './App.css';
import Logo from './components/logo.jsx';
import ListaDeTareas from './components/Lista-de-tareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App;
