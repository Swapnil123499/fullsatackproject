import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
    catid:any;
    quizzes:any;
  constructor(
    private _route: ActivatedRoute,
    private _quiz:QuizService
  ) { }

  ngOnInit(): void {

   //this.catid= this._route.snapshot.params['catid'];
    //console.log(this.catid);
      

    this._route.params.subscribe((params)=>
    {
      this.catid = params['catid'];
      if(this.catid==0){
        //loading all quiz 
        this._quiz.getActiveQuizzes().subscribe((data)=>{
          this.quizzes=data;
          console.log(this.quizzes);
        },
        (error)=>{
          console.log(error);
          Swal.fire("Error !!",'error while geting the quiz','error');
  
        })
        
      }
      else{   
        console.log("load specipic quiz")
        this._quiz.getActiveQuizzesOfCategory(this.catid).subscribe(
          (data)=>{
            this.quizzes=data;
          },
          (error)=>{
            console.log(error);
            alert('error in loading data')
          }
        )
    }
    })
    

  }

}
