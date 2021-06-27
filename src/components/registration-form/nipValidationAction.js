import {  npiNumberValidate  } from "../../api/userApi";

export const ValidateNpiNumber=(npiNumbner)=> async (dispatch)=>{
    try {
        
        const result= await npiNumberValidate(npiNumbner);

  
    } catch (error) {
        console.log(error)
    }
}