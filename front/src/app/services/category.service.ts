import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public categories(){
      //this uri came from server API
    return this.http.get(`${baseUrl}/category/`);
  }

  //add new category
  public addCategory(category:any){
   
    return this.http.post( `${baseUrl}/category/`, category)
  }
}
