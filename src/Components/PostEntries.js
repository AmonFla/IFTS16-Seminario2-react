import PostEntry from "./PostEntry"; 
import { useEffect, useState } from "react"; 
import servEntrada from "./../services/entradas"


function PostEntries({setEntrada }) {
  const [entradas, setEntradas] = useState(null);

  useEffect( () => { 
    servEntrada.getEntradas().then(data => setEntradas(data));
  }, []);
  
  return (
    <>
      {entradas ?
        entradas.map((entrada) => { 
          return (
            <PostEntry setEntrada={setEntrada} key={entrada.id} entrada={entrada} />
          );
        })
        :
        <></>
      }
    </>
  );
}

export default PostEntries;
