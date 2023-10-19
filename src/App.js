import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Alumnos } from './components/alumnos';
import Login from './components/login';
let amigos = ['Joaquin', 'Nayeli', 'Ana'];

function App() {
  const [sesion, setSesion] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <Header title={"Mi 1er proyecto de React"}/>
        <img src={logo} className="App-logo" alt="logo" />
        {sesion === true ? 
          // <> es fragmento, como un div integrado que te permite poner varias cosas
          <>
                    <Login/>

            <Header title={"Bienvenido"} color={"red"}/>
            <Alumnos amigos={amigos}/>
            <button onClick={()=>setSesion(false)}> Cerrar sesion</button>
          </>
          :
          <>
            <p>No has iniciado sesion....</p>
            <button onClick={()=>setSesion(true)}>Iniciar sesion</button>
          </>
        }
      </header>
    </div>
  );
}

export default App;