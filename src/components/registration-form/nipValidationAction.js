import {  npiNumberValidate  } from "../../api/userApi";

export const ValidateNpiNumber=(npiNumbner)=> async (dispatch)=>{
    try {
        
        const result= await npiNumberValidate(npiNumbner);
        console.log(result);
        if (result.status==="success") {
            
        }
    } catch (error) {
        
    }
}