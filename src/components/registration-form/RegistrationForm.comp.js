import React, { useState, useEffect } from "react";
import {
  Container
} from "react-bootstrap";

import { RegistrationNotValidation } from "./RegistrationNotValidation.comp";
import { RegistrationValidationPass } from "./RegistrationValidationPass.comp";

let initialState = {
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

const shareData={
  initialData:initialState, 
}

const RegistrationForm = () => {
  const [isValid,setValid]=useState(false);
  
   return (
    <Container>
     { isValid ?<RegistrationValidationPass shareData={shareData} />:<RegistrationNotValidation shareData={{...shareData,setValid:setValid}} />}     
    </Container>
  );
};

export default RegistrationForm;
