import {  npiNumberValidate  } from "../../api/userApi";

export const ValidateNpiNumber=(npiNumbner)=> async (dispatch)=>{ 

    return  await npiNumberValidate(npiNumbner);
  
}