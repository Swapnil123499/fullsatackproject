import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {
   categories:any;
  constructor(
    private _cat:CategoryService,
  ) { }

  ngOnInit(): void {
    this._cat.categories().subscribe((data)=>{
      this.categories=data;


    },
    (error)=>{
      Swal.fire("Error  !!",'error found while getting value','error');
    })
  }

}
