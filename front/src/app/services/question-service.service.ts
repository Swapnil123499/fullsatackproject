import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  
  constructor(
    private _http:HttpClient
  ) { }

  public getQuestionsQuiz(qid:any){

    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  public getQuestionsQuizForTest(qid:any){

    return this._http.get(`${baseUrl}/question/quiz/${qid}`);
  }

  //add question
  public addQuestion(question:any){
    return this._http.post(`${baseUrl}/question/`,question);
  }
  //delete questions
  public deleteQuestion(questionid:any){
   return this._http.delete(`${baseUrl}/question/${questionid}`);
  }
}
