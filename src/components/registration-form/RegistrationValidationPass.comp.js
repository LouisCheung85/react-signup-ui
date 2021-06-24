import React, {useState,useEffect} from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Spinner,
    Alert,
    Modal
  } from "react-bootstrap";
import { newUserRegistration } from "./userRegAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
    identificationType: "",
    identificationNumber:123 ,
    companyName: "Dented Code",
    firstName:'',
    secondName:'',
    firstLastName:'',
    secondLastName:'',
    email: "",  
    address: "George st Sydney",
    municipalityAddress:'',
    cellPhone: "",   
  };

  const passVerificationError = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpclChr: false,
    confirmPass: false,
  };
  
export const RegistrationValidationPass=(props)=>
{
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState(initialState);
    const [passwordError, setPasswordError] = useState(passVerificationError);
    const [isvalid,setValidate]=useState(false);
    const { isLoading, status, message } = useSelector(
      (state) => state.registration
    );
  
    useEffect(() => {}, [newUser]);
  
    const handleOnChange = (e) => {
      const { name, value } = e.target;
  
      setNewUser({ ...newUser, [name]: value });
  
      if (name === "password") {
        const isLenthy = value.length > 8;
        const hasUpper = /[A-Z]/.test(value);
        const hasLower = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpclChr = /[@,#,$,%,&]/.test(value);
  
        setPasswordError({
          ...passwordError,
          isLenthy,
          hasUpper,
          hasLower,
          hasNumber,
          hasSpclChr,
        });
      }
  
      if (name === "confirmPass") {
        setPasswordError({
          ...passwordError,
          confirmPass: newUser.password === value,
        });
      }
    };
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
      // console.log(newUser);
      const { name, phone, email, company, address, password } = newUser;
  
      const newRegistration = {
        name,
        phone,
        email,
        company,
        address,
        password,
      };
      dispatch(newUserRegistration(newRegistration));
    };
    return (
        <>
        <Row>
        <Col>
          <h1 className="text-info">User Registration</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Identification Type</Form.Label>
              <Form.Control
                as="select"
                type="select"
                name="identificationType"
                value={newUser.identificationType}
                onChange={handleOnChange}
                placeholder="Identification Type"
                required>
                  <option value="1">A</option>
                  <option value="1">B</option>
                  <option value="1">C</option>
                  <option value="1">D</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Identification Number</Form.Label>
              <Form.Control
                type="number"
                name="identificationNumber"
                value={newUser.identificationNumber}
                onChange={handleOnChange}
                placeholder="Identification Number"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={newUser.companyName}
                onChange={handleOnChange}
                placeholder="Company Name"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={newUser.firstName}
                onChange={handleOnChange}
                placeholder="First Name"
                required
              />
            </Form.Group>
            
            
            <Form.Group>
              <Form.Label>Second Name</Form.Label>
              <Form.Control
                type="text"
                name="secondName"
                value={newUser.secondName}
                onChange={handleOnChange}
                placeholder="Second Name"
                required
              />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>First last Name</Form.Label>
              <Form.Control
                type="text"
                name="firstLastName"
                value={newUser.firstLastName}
                onChange={handleOnChange}
                placeholder="First last Name"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Second Last Name</Form.Label>
              <Form.Control
                type="text"
                name="secondLastName"
                value={newUser.secondLastName}
                onChange={handleOnChange}
                placeholder="Second Last Name"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleOnChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>         

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={newUser.address}
                onChange={handleOnChange}
                placeholder="Full address"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>municipality of the address:</Form.Label>
              <Form.Control
                type="text"
                name="municipalityAddress"
                value={newUser.municipalityAddress}
                onChange={handleOnChange}
                placeholder="municipality of the address"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cell Phone</Form.Label>
              <Form.Control
                type="number"
                name="cellPhone"
                value={newUser.cellPhone}
                onChange={handleOnChange}
                placeholder="Cell Phone"
                required
              />
            </Form.Group>

            {/* <Form.Text>
              {!passwordError.confirmPass && (
                <div className="text-danger mb-3">Password doesn't match!</div>
              )}
            </Form.Text> */}
{/* 
            <ul className="mb-4">
              <li
                className={
                  passwordError.isLenthy ? "text-success" : "text-danger"
                }
              >
                Min 8 characters
              </li>
              <li
                className={
                  passwordError.hasUpper ? "text-success" : "text-danger"
                }
              >
                At least one upper case
              </li>
              <li
                className={
                  passwordError.hasLower ? "text-success" : "text-danger"
                }
              >
                At least one lower case
              </li>
              <li
                className={
                  passwordError.hasNumber ? "text-success" : "text-danger"
                }
              >
                At least one number
              </li>
              <li
                className={
                  passwordError.hasSpclChr ? "text-success" : "text-danger"
                }
              >
                At least on of the special characters i.e @ # $ % &{" "}
              </li>
            </ul> */}

            <Button
              variant="primary"
              type="submit"
              disabled={Object.values(passwordError).includes(false)}
            >
              Submit
            </Button>
            {isLoading && <Spinner variant="info" animation="border" />}
          </Form>
        </Col>
      </Row>
    </>
    )
}