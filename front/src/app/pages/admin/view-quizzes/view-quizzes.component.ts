import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any
  

  

  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {
this._quiz.quizzes().subscribe(
  (data:any)=>{
    this.quizzes=data;
    console.log(this.quizzes);
  },
  (error)=>{
    console.log(error);
    Swal.fire('Error !!',"Error in loding data !",'error');
  }
)

  }

  deleteQuiz(qid:any){
    
    Swal.fire({
      icon:'info',
      title: 'Are you sure',
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((Data)=>{
      if(Data.isConfirmed){
        //delete


         this._quiz.deletquiz(qid).subscribe(
          (data)=>{
            this.quizzes =this.quizzes.filter((quiz:any)=>quiz.qid !=qid);
            Swal.fire('success','quiz deleted','success');
          },
          (error)=>{
            Swal.fire('Error !!','quiz not deleted','error');
            console.log(error);
          }
        )
        
      }
    })
      

     
    }

  }



