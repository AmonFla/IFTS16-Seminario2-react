import { Nav } from "react-bootstrap" 

const LoggedUser = ({ user, setUser , setVer}) => { 
   
  const logout = () => { 
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <>
      <p>Hola:{user.name}</p>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link onClick={ ()=>setVer('add-entrada')}>Agregar Entrada</Nav.Link>
          <Nav.Link onClick={()=> logout() }>Logout</Nav.Link>
        </Nav.Item>

      </Nav>
    </>
  )
}

export default LoggedUser