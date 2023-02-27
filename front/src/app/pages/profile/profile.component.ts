import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  //ssuser=null;
  constructor(private login :LoginService) { }

  ngOnInit(): void {
this.user=this.login.getUser();//get request from the local storage
//data comming from the server process
    /*this.login.getCurrentUser().subscribe(
  (user: any) =>{
    this.user =user;
  },
  (error)=>{
    alert('error');
  }
)*/
  }

}
