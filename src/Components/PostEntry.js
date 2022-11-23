function PostEntry(props) { 
  return (
    <>
      <p>{props.entrada.id}-{props.entrada.titulo}
        <button onClick={() => props.setEntrada(props.entrada.id)}>ver</button></p>
    </>
  );
}

export default  PostEntry;