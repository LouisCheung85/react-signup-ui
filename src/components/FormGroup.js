import {FormControl,FormGroup} from ''

function FormGroup(props){
    let{obj}=props;
    const{
        disable=false,as="input",value='',maxlength=4000,
        name
    }=obj;
    
    if (obj.as==="input") {
        return(
                <Form.Group>

                </Form.Group>
            
            )
    }
}