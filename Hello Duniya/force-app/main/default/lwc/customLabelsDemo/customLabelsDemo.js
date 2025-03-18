import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.descriptionOne'
import DESCRIPTION_TWO from '@salesforce/label/c.descriptionTwo'

export default class CustomLabelsDemo extends LightningElement {
    // descriptionOne= DESCRIPTION_ONE
    // descriptionTwo = DESCRIPTION_TWO
    //not a above good aaproach setting each time a different variable
    LABELS ={
        descriptionOne: DESCRIPTION_ONE,
        descriptionTwo: DESCRIPTION_TWO
    }
}