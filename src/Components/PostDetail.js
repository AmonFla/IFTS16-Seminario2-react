import { useState, useEffect } from "react";
import servEntrada from './../services/entradas'

function PostDetail({ id, setEntrada }) { 
  const [entry, setEntry] = useState(null)

  useEffect( () => { 
    servEntrada.getEntrada(id).then(data => setEntry(data));
  }, []);

  return (
  <>
    {entry?
      <>
        <p>{entry.id}-{entry.titulo}</p>
        <p>{entry.contenido}</p>
        <p>{entry.updatedAt}</p>
        <button onClick={()=>setEntrada(null) }>retornar a la lista de entradas</button>
      </> 
        :
        <></>
    }
    </>
  );
}

export default  PostDetail;