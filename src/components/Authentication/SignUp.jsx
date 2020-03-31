import React, { useState } from 'react'
import { Form, Button, Modal, Container, Row, Col, Spinner } from 'react-bootstrap'
import { useHistory,Link } from 'react-router-dom'

import Logo from '../Logo/Logo'
import './authentication-styles.css'
import { signupSteps } from '../../actions/authenticationActions'

function SigupStepOne(props) {
    const [name, handleName] = useState(null)
    const [email, handleEmail] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        let nameSplited = name.split(' ')
        let postData = {
            "first_name": nameSplited[0],
            "second_name": nameSplited[1],
            "email": email
        }
        props.submit(postData)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>First and last name</Form.Label>
                <Form.Control onChange={(event) => handleName(event.target.value)} required type="text" />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(event) => handleEmail(event.target.value)} required type="email" />
                <div className='text-center create-acc-link'>Already have an account? <Link to='/login'>Sign in</Link></div>
                {props.err && <span className="err-message">{props.err}</span>}
            </Form.Group>
            <div className='text-center'>
                <Button disabled={props.showLoader} className='auth-page-btn' type="submit">
                    Next
            </Button>
                {props.showLoader && <Spinner className='spinner' animation="border" />}
            </div>
        </Form>
    )
}

function SigupStepTwo(props) {
    const [code, handleVerificationCode] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        let postData = { code }
        props.submit(postData)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCode">
                <Form.Label>Please enter verification code we set you via email</Form.Label>
                <Form.Control onChange={(event) => handleVerificationCode(event.target.value)} required type="text" />
                {props.err && <span className="err-message">{props.err}</span>}
            </Form.Group>
            <div className='text-center'>
                <Button disabled={props.showLoader} className='auth-page-btn' type="submit">
                    Next
            </Button>
                {props.showLoader && <Spinner className='spinner' animation="border" />}
            </div>
        </Form>
    )
}


function SigupStepThree(props) {
    const [password1, handlePassword1] = useState(null)
    const [password2, handlePassword2] = useState(null)
    const [err, handleErr] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        if (password1 === password2) {
            let postData = { "password": password1 }
            props.submit(postData)
        }
        else {
            handleErr('Please confirm the password')
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPassword1">
                <Form.Label>Please set a password</Form.Label>
                <Form.Control onChange={(event) => { handleErr(null); handlePassword1(event.target.value) }} required type="password" />
            </Form.Group>
            <Form.Group controlId="formPassword2">
                <Form.Label>Confirm your password</Form.Label>
                <Form.Control onChange={(event) => { handleErr(null); handlePassword2(event.target.value) }} required type="password" />
                {err && <span className="err-message">{err}</span>}
                {props.err && <span className="err-message">{props.err}</span>}
            </Form.Group>
            <div className='text-center'>
                <Button disabled={props.showLoader} className='auth-page-btn' type="submit">
                    Next
            </Button>
                {props.showLoader && <Spinner className='spinner' animation="border" />}
            </div>
        </Form>
    )
}

function SigupStepFour(props) {
    const [image, handleImage] = useState(null)
    const [loadedImage, handleLoadedImage] = useState(null)


    function onFileUpload(e) {
        e.preventDefault()
        if (e.target.type === "file") {
            let uploadedImage = Array.from(e.target.files)[0]
            handleImage(uploadedImage)
            loadImage(uploadedImage)
        }
    }

    function loadImage(attachment) {
        const reader = new FileReader();
        reader.onload = e => {
            handleLoadedImage(e.target.result)
        };
        reader.readAsDataURL(attachment);
    }

    function handleSubmit(e) {
        e.preventDefault()
        let postData = { "image": image }
        props.submit(postData)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <div className="user-icon">
                {loadedImage ? <img width='200px' src={loadedImage} alt="user" /> : <img src='./userIcon.svg' alt="masque" />}
            </div>
            <div style={{ flexDirection: 'column' }} className="input-group">
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={onFileUpload}
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                        <div className='upload-icon'>
                            <img src='./uploadicon.png' alt="upload-icon" />
                        </div>
                    </label>
                </div>
                <div>
                    <p className='text-center mt-2'><b>Please upload a profile picture</b></p>
                    <p className='text-center'>This step is mandatory in creating your profile.</p>
                    {props.err && <span className="err-message">{props.err}</span>}
                </div>
            </div>
            <div className='text-center mt-2 d-flex flex-column align-items-center'>
                <Button disabled={props.showLoader} className='auth-page-btn' type="submit">
                    Next
                    </Button>
                <Button className='auth-page-btn mt-2' onClick={props.back}>
                    Back
                </Button>
                {props.showLoader && <Spinner className='spinner-bottom ' animation="border" />}
            </div>
        </Form>
    )
}

function SigupStepFive(props) {
    const [passion, handlePassion] = useState('Painting')

    function handleSubmit(e) {
        e.preventDefault()
        let postData = { passion }
        props.submit(postData)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCode">
                <Form.Label>What form of expression you're interested in?</Form.Label>
                <Form.Control onChange={(event) => handlePassion(event.target.value)} as="select">
                    <option>Painting</option>
                    <option>Photography</option>
                    <option>Writing</option>
                </Form.Control>
                {props.err && <span className="err-message">{props.err}</span>}
            </Form.Group>
            <div className='text-center mt-2 d-flex flex-column align-items-center'>
                <Button disabled={props.showLoader} className='auth-page-btn' type="submit">
                    Next
                </Button>
                <Button className='auth-page-btn mt-2' onClick={props.back}>
                    Back
            </Button>
                {props.showLoader && <Spinner className='spinner-bottom' animation="border" />}
            </div>
        </Form>
    )
}


function SignUpWrapper() {
    const history = useHistory()
    const [signUpStep, handleSignUpStepValue] = useState(1)
    const [temp_auth, handleTempAuth] = useState(null)
    const [showLoader, handleLoader] = useState(false)
    const [err, handleErr] = useState(null)

    async function handleSignupStepOne(data) {
        try {
            handleLoader(true)
            handleErr(null)
            let res = await signupSteps(signUpStep, data)
            handleTempAuth(res.data.temp_token)
            handleSignUpStepValue(2)
            handleLoader(false)
        }
        catch (e) {
            handleErr(e.data.email ? e.data.email:'Something went wrong. Please try again.')
            handleLoader(false)
        }
    }
    async function handleSignupStepTwo(data) {
        data['temp_token'] = temp_auth
        try {
            handleLoader(true)
            handleErr(null)
            await signupSteps(signUpStep, data)
            handleSignUpStepValue(3)
            handleLoader(false)
        }
        catch (e) {
            handleErr(e.data.code ? e.data.code[0]:'Something went wrong. Please try again.')
            handleLoader(false)
        }
    }
    async function handleSignupStepThree(data) {
        data['temp_token'] = temp_auth
        try {
            handleLoader(true)
            handleErr(null)
            await signupSteps(signUpStep, data)
            handleSignUpStepValue(4)
            handleLoader(false)
        }
        catch (e) {
            handleErr(e.data.password ? e.data.password[0]:'Something went wrong. Please try again.')
            handleLoader(false)
        }
    }

    async function handleSignupStepFour(data) {
        data['temp_token'] = temp_auth
        try {
            handleLoader(true)
            handleErr(null)
            await signupSteps(signUpStep, data, 'file')
            handleSignUpStepValue(5)
            handleLoader(false)
        }
        catch (e) {
            handleErr(e.data.image ? e.data.image[0]:'Something went wrong. Please try again.')
            handleLoader(false)
        }
    }

    async function handleSignupStepFive(data) {
        data['temp_token'] = temp_auth
        try {
            handleLoader(true)
            handleErr(null)
            await signupSteps(signUpStep, data)
            handleLoader(false)
            history.push('/login')

        }
        catch (e) {
            handleErr(e.data.passion ? e.data.passion[0]:'Something went wrong. Please try again.')
            handleLoader(false)
        }
    }

    return (
        <div className='modal-wrapper-div'>
            <Modal.Dialog centered={true} size='lg'>
                <Modal.Header>
                    <Modal.Title>Signup to PageX</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='text-center'>
                        <Logo />
                    </div>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col className='form-section' xs={6}>
                                {signUpStep === 1 && <SigupStepOne err={err} showLoader={showLoader} submit={handleSignupStepOne} />}
                                {signUpStep === 2 && <SigupStepTwo err={err} showLoader={showLoader} submit={handleSignupStepTwo} />}
                                {signUpStep === 3 && <SigupStepThree err={err} showLoader={showLoader} submit={handleSignupStepThree} />}
                                {signUpStep === 4 && <SigupStepFour err={err} showLoader={showLoader} back={() => { handleSignUpStepValue(3) }} submit={handleSignupStepFour} />}
                                {signUpStep === 5 && <SigupStepFive err={err} showLoader={showLoader} back={() => { handleSignUpStepValue(4) }} submit={handleSignupStepFive} />}
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
}

export default SignUpWrapper