function PostEntry(props) { 
  const setData = (id) => { 
    props.setEntrada(id)
    props.setVer('entrada')
  }
  
  return (
    <>
      <p>{props.entrada.id}-{props.entrada.titulo}
        <button onClick={() => setData(props.entrada.id)}>ver</button></p>
    </>
  );
}

export default  PostEntry;