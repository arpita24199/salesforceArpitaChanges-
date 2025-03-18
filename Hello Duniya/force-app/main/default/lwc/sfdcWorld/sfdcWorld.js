import { LightningElement,track } from 'lwc';

export default class SfdcWorld extends LightningElement {
    name
    age=30
    fullname = 'Salesforce Troop'
    showdata=false
    //@track 
    details={
        name:'dummy',
        place:'Melbourne',}

     userList =["A","B","C"]

    changeHandler(event){
        this.fullname= event.target.value;
    }
    changeTrack(event){
        //1st method use @track and use below line
        //this.details.place = event.target.value;

        //2nd method
        //we can use track but we avoid and generate shallow copy
        this.details= {...this.details,"place":event.target.value}
    }

  get arrayTest(){
        return this.userList[0]
    }
}
