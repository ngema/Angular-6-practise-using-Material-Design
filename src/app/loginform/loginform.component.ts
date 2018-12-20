import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser' ;// merely used for tab broswer naming/title
import {FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router,private user:UserService,private title:Title) {
    
   }
   store:string;
   hide:boolean=true;// used to mask/show password
   /*Below function show "email" used to the validity and returns null if a control is valid
   or an error object if it's invalid */
   
  ngOnInit() {
    this.title.setTitle('Home');//display at the top of the tab
  }
  loginuser(capture){
    capture.preventDefault();
    console.log(capture);
    var username=capture.target.elements[0].value;
    var password=capture.target.elements[1].value;
    console.log(username,password);
    this.store=username;
    // console.log(this.capturee.password);
    if(username=="admin" && password=="12"){
      this.user.setuserloggedin();
      this.router.navigate(['dashboard']);
    }
    return false;
  }

}
