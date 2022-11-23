import axios from 'axios';

const url = 'http://localhost:4000/login';

const  login = async (credenciales) => {
  const response = await axios.post(url, credenciales); 
  if(response.status === 200)
    return response.data;
  else
    return null
} 

// eslint-disable-next-line import/no-anonymous-default-export
export default { login }