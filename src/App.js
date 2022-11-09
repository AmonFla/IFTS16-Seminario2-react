import ElementoP from "./Components/ElementoP";

function App() {

    
  return (
    <div >
      <h1>Saludos</h1>
      {['Hola Muno', 'Chau Mundo', 'Ya me fui'].map((elemento) => { 
        return (
          <ElementoP texto={elemento} />
        );
      }) }
    </div>
   
  );
}

export default App;
