import React, { useEffect, useState } from 'react'
import { Modal, Form, Button, Container, Row, Col, } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { ValidateNpiNumber } from "./nipValidationAction";


const initialState={
    newNumber:""
}

export const RegistrationNotValidation = (props) => {

    const [newUser, setNewUser] = useState(initialState);
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        const { name, value } = e.target;   
        setNewUser({...newUser,[name]:value});
    }
  
    const handleOnSubmit = (e) => {
         e.preventDefault();
         const {newNumber}=newUser;
         dispatch(ValidateNpiNumber(newNumber));
    }
    useEffect(()=>{},[newUser])
    return (
        <>
            <Row>
                <Col>
                    <h1 className="text-info">User Registration</h1>
                </Col>
            </Row>
            <Form onSubmit={handleOnSubmit}>
            <Row>
                <Col>                  
                        <Form.Group>
                            <Form.Label>
                                Please provide a NIT number to validate:
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="newNumber"
                                value={newUser.newNumber}
                                onChange={handleOnChange}
                                placeholder="enter NIT"
                                required
                            >
                            </Form.Control>
                        </Form.Group>                             
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group>
                            <Button
                                variant="primary"
                                type="submit"                              
                            >
                                Continue
                            </Button>
                        </Form.Group>          
                </Col>
            </Row>
            </Form>
        </>
    )
}