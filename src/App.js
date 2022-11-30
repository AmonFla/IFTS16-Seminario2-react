
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostEntries from './Components/PostEntries';
import PostDetail from './Components/PostDetail';
import LoginForm from './Components/LoginForm';
import LoggedUser from './Components/LoggedUser';
import AddEntry from './Components/EntradaForm/AddEntry';

function App() {
  const [ver, setVer] = useState('lista-entradas')
  const [entrada, setEntrada] = useState('')
  const [user, setUser] = useState(null)
    
  useEffect(() => {
    const loggedUser = localStorage.getItem('user')
    if (loggedUser) {
      setUser(JSON.parse(loggedUser))
    }
  }, [])
  
  const view = () => { 
    switch (ver) {
      case 'lista-entradas':
        return <PostEntries setEntrada={setEntrada} setVer={setVer} />
      case 'entrada':
        return <PostDetail setEntrada={setEntrada} setVer={setVer} id={entrada} />
      case 'add-entrada':
        return <AddEntry user={user} setVer={setVer} />
      default:
        return <></>
    }
  }
  return (
    <Container fluid>
      <Row> 
        <h1>Blog 1.0</h1>
      </Row>
      <Row>
        <Col lg={3} >
          {user ?
            <LoggedUser user={user} setUser={setUser} setVer={setVer }/>
          :
            <LoginForm setUser={setUser} />            
          }
        </Col>
        <Col log={6}>
          {view() }
          
        </Col>
        <Col lg={3} >
          columna 2
        </Col>
      </Row>
      <Row>
        Footer
      </Row>
    </Container>
  );
}

export default App;
