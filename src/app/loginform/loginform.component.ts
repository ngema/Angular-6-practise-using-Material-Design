import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser' ;// merely used for tab broswer naming/title
import {FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {RegistrationService} from '../registration.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router,private user:UserService,private title:Title,private Newusername:RegistrationService) {
    
   }
   store:string;
   hide:boolean=true;// used to mask/show password
   /*Below function show "email" used to the validity and returns null if a control is valid
   or an error object if it's invalid */
   Username:string;
   newpassword:string;
  ngOnInit() {
    this.title.setTitle('Home');//display at the top of the tab
    this.Newusername.cast.subscribe(register=>this.Username=register);
    this.Newusername.castpassword.subscribe(password=>this.newpassword=password);
  }
  loginuser(capture){
    capture.preventDefault();
    console.log(capture);
    var username=capture.target.elements[0].value;
    var password=capture.target.elements[1].value;
    console.log(username,password);
    console.log(this.Username,this.newpassword);
    
    // console.log(this.capturee.password);
    if(this.Username==username && password==this.newpassword){
      this.user.setuserloggedin();
      this.router.navigate(['dashboard']);
    }
    return false;
  }

}
