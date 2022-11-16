import axios from 'axios';

const url = 'http://localhost:4000/entradas';

const  getEntradas = async () => {
  const response = await axios.get(url); 
  if(response.status === 200)
    return response.data;
  else
    return null
} 
 
const  getEntrada = async (id) => {
  const response = await axios.get(url+'/'+id); 
  if(response.status === 200)
    return response.data;
  else
    return null
 }

// eslint-disable-next-line import/no-anonymous-default-export
export default { getEntradas, getEntrada }