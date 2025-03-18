import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ToastNotifications extends LightningElement {

    /*toastHandler()
    {
        const event= new ShowToastEvent({
            title:'Success!!',
            message:'Account Created!!',
            variant:'success'
            //by default the mode is dismissable i.e 3 sec max


        })

        this.dispatchEvent(event)
    }

    toastHandlerTwo()
    {
        const event= new ShowToastEvent({
            title:'Error!!',
            message:'Account NotCreated!!',
            variant:'error'
            //by default the mode is dismissable i.e 3 sec max


        })

        this.dispatchEvent(event)
    } */
   //replace above with a common method

    

   showToast(title, message, variant){
    const event = new ShowToastEvent({
        title,
        message,
        variant,
        //message data is in the form of array and data paas in string or object
        messageData :[
            'Salesforce',{
            url:'http:/www.salesforce.com',
            label :'Click Here'
            
        }

        ]

        
    })
    this.dispatchEvent(event)

   }

   toastHandlerTwo(){
    this.showToast('Error!!','Account Creation Failed!!','error')
   }

   toastHandler(){
    this.showToast('Success!!','{0} Account Creation Success!! {1}','success')
   }

   toastHandlerThree(){
    this.showToast('Warning!!','Account Creation Success!!','warning')
   }
   
   toastHandlerFour(){
    this.showToast('Info!!','Account Creation Success!!','info')
   }


}