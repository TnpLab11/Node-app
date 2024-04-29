import React from 'react'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Login = () => {
  return (
    <>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"650px",width:'100%'}}>
          <Card style={{ width: '70rem',height:"35rem",marginTop:'50px',boxShadow:"-20px,20px,-20px rgb(0,0,0.3" }}>
     
      <Card.Body>
      <Container>
      <Row>
        <Col style={{textAlign:"left"}}><Card.Title><h1><b>Login Page</b></h1></Card.Title></Col>
        <Col style={{textAlign:"left",marginTop:"80px"}}> 
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group><br></br>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display:"flex"}}>
        <Form.Check type="checkbox" label="Check me out" />
        <Card.Link href="#" style={{marginLeft:"200px"}}>Forget Password?</Card.Link>
      </Form.Group><br></br>
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit"   size="lg">
        Sign In
      </Button>
      </div><br></br>
      <div >
      <hr></hr>
      </div><br></br>
      
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit"   size="lg">
        Go To SignUp
      </Button>
      </div>

     
    </Form></Col>
      </Row>
    </Container>   
       
      </Card.Body>
    </Card>
  
      
    </div>
      
    </>
  )
}

export default Login
