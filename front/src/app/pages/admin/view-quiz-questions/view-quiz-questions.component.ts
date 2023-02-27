import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
 qid:any;
qtitle:any;
questions:any;

  constructor(
private _route:ActivatedRoute,
private _question:QuestionServiceService,
private _snak:MatSnackBar


  ) {}

  ngOnInit(): void {

   this.qid= this._route.snapshot.params['qid'];
   this.qtitle = this._route.snapshot.params['title'];
   this._question.getQuestionsQuiz(this.qid).subscribe(
    (data)=>{
      console.log(data);
      this.questions=data;
    },
    (error)=>{
      console.log(error);
      
    }
   )

  }

  //delete question

  deleteQuestion(qd:any){
    //confirmation for deleting message;
    Swal.fire(
      {
        icon:'info',
        showCancelButton:true,
        confirmButtonText:'Delete',
        title:'Are you sure, want to delete this question'
      }
    ).then((result)=>
    {
      //confirm
      if(result.isConfirmed){
        this._question.deleteQuestion(qd).subscribe(
          (data)=>{
           this._snak.open('Question Deleted','',{
            duration:3000,

           });
           this.questions =this.questions.filter((q:any)=> q.quesid !=qd);
           
          },
          (error)=>{
            this._snak.open(
              'Error in deleting questions','',{
                duration:3000,
              }
            )
          }
        )
      }
    })
    
  }

}
