import { LightningElement,api } from 'lwc';

export default class LwcComponentForAura extends LightningElement {
    @api title
    callAura(){
        const eve= new CustomEvent("sendmessage",{detail:{
            "msg":"Hello from child to parent communication"
        }})
        this.dispatchEvent(eve)
    }
}