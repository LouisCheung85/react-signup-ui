import React, { Component } from 'react'

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            formData:[
                {
                    "name":"IdentificationType",
                    "label":"Identification Type",
                    "type":"select",
                    "value":"",
                    "Options":[
                        {"Text":"Text1","Value":"1"},
                        {"Text":"Text2","Value":"2"}
                    ],
                    "required":true
                },
                {
                    "name":"Identificationnumber",
                    "label":"Identification number",
                    "type":"number",
                    "value":"",
                    "required":false
                },                
                {
                    "name":"Companyname",
                    "label":"Company name",
                    "type":"number",
                    "value":"",
                    "required":false
                },
                {
                    "name":"Firstname",
                    "label":"First name",
                    "type":"number",
                    "value":"",
                    "required":false
                },
                {
                    
                    "name":"Secondname",
                    "label":"Secondname",
                    "type":"number",
                    "value":"",
                    "required":false
                },
                {
                    
                    "name":"Secondlastname",
                    "label":"Second last name",
                    "type":"input",
                    "value":"",
                    "required":false
                },
                {
                    "name":"Email",
                    "label":"E-mail",
                    "type":"input",
                    "value":"",
                    "required":false
                },
                {
                    "name":"Cellphone",
                    "label":"Cell phone",
                    "type":"input",
                    "value":"",
                    "required":false

                }
            ]
        }
    }

    render(){
        return(<form>
            {this.state.formData.map(item=>{
                    <div key="{item.name}" className="form-group">
                        
                    </div>
            })}
        </form>);
    }
}
