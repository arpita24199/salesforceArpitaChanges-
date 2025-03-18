import { LightningElement } from 'lwc';

export default class QuizAppInLwc extends LightningElement {
    myQuestions =[{
                     id:'Question1',
                     question : 'Which one of the following is not a template loop',
                     answers:{a:'for:each',
                              b:'iterator',
                              c:'map loop'
                             },
                     correctanswer:'c',

                  },

                  {
                    id:'Question2',
                    question : 'Which of the file is not valid in LWC Componenet',
                    answers:{a:'.svg',
                             b:'.apex',
                             c:'.js'
                            },
                     correctanswer:'b',
                 },
                 
                 {
                    id:'Question3',
                    question : 'Which of the file is not a directive',
                    answers:{a:'for:each',
                             b:'if:true',
                             c:'@track'
                            },
                     correctanswer:'c',
                 },



]
selected ={} //for storing of answers
isSubmitted=false//use to show the result
correctAnswers=0
changeHandler(event)
{
    console.log('name',event.target.name)
    console.log('value',event.target.value)
    let {name,value}= event.target
    this.selected = {...this.selected,[name]:value}
}
get allNotSelected(){
    return !(Object.keys(this.selected).length=== this.myQuestions.length)
}

submitHandler(event){
    event.preventDefault()
    let correct =this.myQuestions.filter(item=>this.selected[item.id]===item.correctanswer)
    this.correctAnswers=correct.length;
    console.log("this.correctAnswers",this.correctAnswers)
    this.isSubmitted=true
}

resetHandler(){
    this.selected ={}
    this.correctAnswers=0;
    this.isSubmitted=false
}

get isScoredFull(){
    return `slds-text-heading_large' ${this.myQuestions.length===this.correctAnswers?
    'slds-text-color_success':'slds-text-color_error'}`
}
}