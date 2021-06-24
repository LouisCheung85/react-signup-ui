import React, { useState, useEffect } from "react";
import {
  Container
} from "react-bootstrap";

import { RegistrationNotValidation } from "./RegistrationNotValidation.comp";
import { RegistrationValidationPass } from "./RegistrationValidationPass.comp";

const RegistrationForm = () => {
  const [isValid,setValid]=useState(false);
   return (
    <Container>
     { isValid ?<RegistrationValidationPass />:<RegistrationNotValidation />}     
    </Container>
  );
};

export default RegistrationForm;
