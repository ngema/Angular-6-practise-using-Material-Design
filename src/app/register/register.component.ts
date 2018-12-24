import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private Newusername:RegistrationService) { }
  newusername:string;
  newpassword:string;

  edituser:string; //carry a registered username 
  editpassword:string;// carry a registered password for the user
  passworduser:string;//HAHAHHAHAAA USED FOR ROOBING NGMODEL SINCE IT DID NOT ALLOW THE USE OF SAME NAMES
  color=' ';//used to store different colours;
  ngOnInit() {
    this.Newusername.cast.subscribe(register=>this.newusername=register);
    this.Newusername.castpassword.subscribe(password=>this.newpassword=password);
   }
  
   
   onStrengthChanged(strength:number)
   {
    this.passworduser=this.editpassword;
   console.log('password strength =',strength);
 }
   editusername(){
     console.log(this.edituser,this.editpassword);
     this.Newusername.editusername(this.edituser);//passing the entered username to registration service
     this.Newusername.edituserpassword(this.editpassword);//passing the entered password to registration service
   }
   
   

}
