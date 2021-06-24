import React,{useState} from 'react'
import { Modal,Form, Button,Container,Row,Col, } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { ValidateNpiNumber } from "./nipValidationAction";

export const RegistrationValidationModal=(props)=>{

    const [newNumber,setNewNumber]=useState('344');
    const [show,setShow]=useState(true);
    const dispatch=useDispatch();

    const handleOnSubmit=(e)=>{
       // e.preventDefault();
        //dispatch()
    }
    const handleOnChange=(e)=>{
     const { name, value } = e.target;        
    }
    return (
        <Modal
            show={show}
            onHide={()=>setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"       
        >
           <Modal.Header>
               <Modal.Title>Validation NIT</Modal.Title>
           </Modal.Header>        
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                        <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                                <Form.Label>
                        Please provide a NIT number to validate:
                                </Form.Label>
                        <Form.Control
                            type="text"
                            name="newNumber"
                            value={newNumber}
                            onChange={handleOnChange}
                            placeholder="enter NIT"
                            required
                        >
                        </Form.Control>
                        </Form.Group>
                        </Form>
                        </Col>
                    </Row>                          
                </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button
              variant="primary"
              type="submit"             
            >Continue</Button>
            </Modal.Footer>
        </Modal>
    )
}