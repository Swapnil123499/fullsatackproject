import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
   
  /*categories=[
    {
      cid:23,
      title:'programming',
      description:'this is testing category'
    },
    {
      cid:24,
      title:'programming',
      description:'this is testing category'
    },
    {
      cid:25,
      title:'programming',
      description:'this is testing category'
    },
  ]*/
  categories:any;
  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
  //while loading the this function are run

  this._category.categories().subscribe((data:any)=>{
//success message print
this.categories=data;
console.log(this.categories);

  },
  
  (error)=>{
    console.log(error);
    console.log('nnn')
    Swal.fire('Error !!',"Error in loading data","error");
  })

  }

}
