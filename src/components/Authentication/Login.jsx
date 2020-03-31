import React, { useState } from 'react'
import { Form, Button, Modal, Container, Row, Col,Spinner } from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'

import Logo from '../Logo/Logo'
import './authentication-styles.css'
import {loginUser} from '../../actions/authenticationActions'

function Login() {
    const history = useHistory()
    const [isAuthenticating,handleIsAuthenticating] = useState(false)
    const [email,handleEmail] = useState(null)
    const [password,handlePassword] = useState(null)
    const [err,handleErr] = useState(null)

    async function authenticateUser(event) {
        event.preventDefault()
        handleErr(null)
        handleIsAuthenticating(true)
        let postData = {
            'email':email,
            'password':password
        }
        try {
            let res = await (loginUser(postData));
            localStorage.setItem('auth_key',res.data.key)
            history.push('/home')
        }
        catch(e) {
            console.log(e.data)
            handleErr(e.data.non_field_errors && e.data.non_field_errors[0])
        }
        handleIsAuthenticating(false)
    }
    
    return (
        <div className='modal-wrapper-div'>
            <Modal.Dialog centered={true} size='lg'>
                <Modal.Header>
                    <Modal.Title>Signin to PageX</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='text-center'>
                        <Logo />
                    </div>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col className='form-section' xs={6}>
                                <Form onSubmit={authenticateUser}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onChange={(event)=>handleEmail(event.target.value)} required type="email"  />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={(event)=>handlePassword(event.target.value)}  required type="password" />
                                        <p className='create-acc-link'>Don't have an account? <Link to='/signup'>Create an account.</Link></p>
                                        {err && <div className="err-message text-center">{err}</div>}
                                    </Form.Group>
                                    <div className='text-center'>
                                        <Button className='auth-page-btn' type="submit">
                                            Signin
                                        </Button>
                                        {isAuthenticating && <Spinner className='spinner' animation="border" />}
                                    </div>
                                </Form>  
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
}

export default Login