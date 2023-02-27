import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _category:CategoryService,
    private _router:Router,
    ) { }

  qId=0;
  quiz:any;
  categories:any;
  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    //alert(this.qId)
    this._quiz.getQuiz(this.qId).subscribe(
      (data)=>{
        this.quiz=data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
        //Swal.fire('Error !!')
      }
    );
    this._category.categories().subscribe(
      (data)=>{
        this.categories=data;
      },
      (error)=>{
        alert('error in loading categories  !!');
      }
    )
  }

/// update from submit
public updateData(){
 // alert('form are submited');
//validation
this._quiz.updateQuiz(this.quiz).subscribe(
  (data)=>{
    Swal.fire("Updated !!",'quiz updated','success').then((e)=>
    {
      this._router.navigate(['/admin/quizzes'])
    });

  },
  (error)=>
  {
    Swal.fire('Error','error in updating','error');
    console.log(error);
  }
)

}

}
