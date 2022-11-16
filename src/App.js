
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostEntries from './Components/PostEntries';
import PostDetail from './Components/PostDetail';

function App() {
  const [entrada, setEntrada] = useState(null)
    
  return (
    <Container fluid>
      <Row> 
        <h1>Blog 1.0</h1>
      </Row>
      <Row>
        <Col lg={3} >
          columna 1
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
    </Container>
  );
}

export default App;
