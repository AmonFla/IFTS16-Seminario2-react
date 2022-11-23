
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostEntries from './Components/PostEntries';
import PostDetail from './Components/PostDetail';
import LoginForm from './Components/LoginForm';
import LoggedUser from './Components/LoggedUser';

function App() {
  const [entrada, setEntrada] = useState(null)
  const [user, setUser] = useState(null)
    
  useEffect(() => {
    const loggedUser = localStorage.getItem('user')
    if (loggedUser) {
      setUser(JSON.parse(loggedUser))
    }
  }, [])
  
  return (
    <Container fluid>
      <Row> 
        <h1>Blog 1.0</h1>
      </Row>
      <Row>
        <Col lg={3} >
          {user ?
            <LoggedUser user={user} setUser={setUser} />
          :
            <LoginForm setUser={setUser} />            
          }
        </Col>
        <Col log={6}>
          {entrada ?
            <PostDetail setEntrada={setEntrada} id={entrada} />
            :
            <PostEntries setEntrada={setEntrada } />
          }
          
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
