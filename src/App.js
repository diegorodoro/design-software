import logo from './logo.svg';
import './App.css';

let sesion=true;

let amigos = ['Joaquin', 'Nayeli', 'Ana'];

function Header({title, color}){
  return <h1 style={{color: color ? color: 'white'}}>{title ? title: "No hay nada"}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenidos a js</h1>
        <Header title={"holaaaa"} color={"green"}/>
        <Header title={"adios"} color={"yellow"}/>
        <Header title={"adios"}></Header>
        <Header/>
      </header>
      {sesion == true ? 
        // <> es fragmento, como un div integrado que te permite poner varias cosas
        <>
        <Header title={"Bienvenido"} color={"red"}/>
        <ul>
          {amigos.map((amigo, index)=>{
            return <li key={index}>{amigo}</li>
          })}
        </ul>
        </>
        :
        <p>No has iniciado sesion....</p>
      }
    </div>
  );
}

export default App;