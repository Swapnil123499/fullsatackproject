import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
 

qid:any;
title:any;

questions={
  quiz:{qid:''},
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
}



  constructor(private _route:ActivatedRoute,
             private _questi:QuestionServiceService 
 ) 
  
  { }

  ngOnInit(): void {

    this.qid=this._route.snapshot.params['qid'];
    this.questions.quiz['qid']=this.qid;
     this.title=this._route.snapshot.params['title']
    //console.log(this.questions.quiz['qid']);
    
  }

  formSubmit(){
    if(this.questions.content.trim()==''|| this.questions.content==null){
  return;
    }

    if(this.questions.option1.trim()==''|| this.questions.option1==null){
      return;
        }

        if(this.questions.option2.trim()==''|| this.questions.option2==null){
          return;
            }
            if(this.questions.answer.trim()==''|| this.questions.answer==null){
              return;
                }


            alert('submit');

            this._questi.addQuestion(this.questions).subscribe(
              (data:any)=>{
                Swal.fire("success",'Question Added and add another one','success');
                this.questions.content='';
                this.questions.option1='';
                this.questions.option2='';
                this.questions.option3='';
               this.questions.option4='';
              },
              (error)=>{
                Swal.fire("Error !!",'error in addind question','error');
              }
            )

  }

}
