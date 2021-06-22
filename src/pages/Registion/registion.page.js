import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./registion.style.css"
import RegistrationForm from "../../components/registration-form/RegistrationForm.comp";

export const Registration = () => {
        return (
                <div className="registion-page bg-info">
                        <div className="mt-5">
                                <Jumbotron className="form-box">
                                        <RegistrationForm />
                                </Jumbotron>
                        </div>
                </div>
        )
}