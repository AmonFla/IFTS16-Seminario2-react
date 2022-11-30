import PostEntry from "./PostEntry"; 
import { useEffect, useState } from "react"; 
import servEntrada from "./../services/entradas"


function PostEntries({setEntrada, setVer }) {
  const [entradas, setEntradas] = useState(null);

  useEffect( () => { 
    servEntrada.getEntradas().then(data => setEntradas(data));
  }, []);
  
  return (
    <>
      {entradas ?
        entradas.map((entrada) => { 
          return (
            <PostEntry setEntrada={setEntrada} setVer={setVer } key={entrada.id} entrada={entrada} />
          );
        })
        :
        <></>
      }
    </>
  );
}

export default PostEntries;
