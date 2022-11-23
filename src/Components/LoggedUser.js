import { Nav } from "react-bootstrap" 

const LoggedUser = ({ user, setUser }) => { 
   
  const logout = () => { 
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <>
      <p>Hola:{user.name}</p>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link>Agregar Entrada</Nav.Link>
          <Nav.Link onClick={()=> logout() }>Logout</Nav.Link>
        </Nav.Item>

      </Nav>
    </>
  )
}

export default LoggedUser