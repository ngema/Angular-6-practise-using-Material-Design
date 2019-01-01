import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {Title} from '@angular/platform-browser' ;// merely used for tab broswer naming/title
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private Newusername:RegistrationService,public title:Title) { }
  newusername:string;
  newpassword:string;

  edituser:string; //carry a registered username 
  editpassword:string;// carry a registered password for the user
  passworduser:string;//HAHAHHAHAAA USED FOR ROOBING NGMODEL SINCE IT DID NOT ALLOW THE USE OF SAME NAMES
  color=' ';//used to store different colours;
  ngOnInit() {
    this.title.setTitle('Registration');//display at the top of the tab
    this.Newusername.cast.subscribe(register=>this.newusername=register);
    this.Newusername.castpassword.subscribe(password=>this.newpassword=password);
   }
  
   
   onStrengthChanged(strength:number)
   {
    this.passworduser=this.editpassword;
   console.log('password strength =',strength); //used show the strength of the password in the console
 }
   editusername(){
     console.log(this.edituser,this.editpassword);
     this.Newusername.editusername(this.edituser);//passing the entered username to registration service
     this.Newusername.edituserpassword(this.editpassword);//passing the entered password to registration service
   }
   
   

}
