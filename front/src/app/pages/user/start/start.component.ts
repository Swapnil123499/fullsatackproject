import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  qid:any;
  questions:any;
  marksGot=0;
  correctAnswer=0;
  attempted=0;

  constructor(private locationSt:LocationStrategy,
    private _route: ActivatedRoute,
    private _question:QuestionServiceService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this._route.snapshot.params['qid'];
    console.log(this.qid)
    this.loadQuestions();
  }
  loadQuestions(){
    this._question.getQuestionsQuizForTest(this.qid).subscribe(
      (data)=>{
        
        this.questions=data;
        
        //new element/variable added other than  pojo
        this.questions.forEach((q:any) => {
          q['givenAnswer']='';
         
          
        });
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!",'Error in loading questions of quiz',"error")
      }
    )
  }
  preventBackButton()
  {
    history.pushState(null, location.href);
    this.locationSt.onPopState(()=>
    {
      history.pushState(null,location.href);
      return false;
    });
  }

  submitQuiz(){

    Swal.fire({
      title: 'Do you want to submit the quiz?',
      
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText:'Dont save',
      icon:'info',
    }).then((e) => {
      
      if(e.isConfirmed){
        //calculation  part on client side
       // this.marksGot=this.questions[0].quiz.maxMarks

        this.questions.forEach((q:any)=>{
          
          if(q.givenAnswer==q.answer){

            this.correctAnswer++
            let markssingle=this.questions[0].quiz.maxMarks/this.questions.length
            this.marksGot=markssingle+this.marksGot



          }
          if(q.givenAnswer.trim()!=''){
            this.attempted++
          }

        });
        console.log("marks got"+this.marksGot)
        console.log(this.questions);
        console.log("the correct answer="+this.correctAnswer)
        console.log("attempted"+this.attempted);

        


      }
    })
  }

}
