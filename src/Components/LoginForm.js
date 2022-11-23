import { useState } from "react"
import { Container, Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap"
import loginServ from "../services/login"


const LoginForm = (props) => { 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => { 
    event.preventDefault()
    try {
      const user = await loginServ.login({username, password})
      localStorage.setItem('user', JSON.stringify(user))
      props.setUser(user)
    } catch (execption) { 
      alert('credenciales no validas')
    }
    
  }

  return (
    <Container>
      <Form className='' onSubmit={handleLogin}>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl
            type="text"
            value={username}
            name="username"
            onChange={({target}) => setUsername(target.value) }
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            value={password}
            name="password"
            onChange={({target}) => setPassword(target.value) }
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Acceder</Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default LoginForm