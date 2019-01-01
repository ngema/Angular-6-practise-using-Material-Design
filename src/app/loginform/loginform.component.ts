import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser' ;// merely used for tab broswer naming/title
import {FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {RegistrationService} from '../registration.service';
import {MatDialog} from '@angular/material';
import { DialogforgotpComponent } from '../dialogforgotp/dialogforgotp.component';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router,private user:UserService,private title:Title,private Newusername:RegistrationService,public dialog: MatDialog) {
    
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
    var username=capture.target.elements[0].value; //capturing username from the DOM element
    var password=capture.target.elements[1].value; //capturing user password from the DOM element
    console.log(username,password);
    console.log(this.Username,this.newpassword);
    
    // console.log(this.capturee.password);
    if(this.Username==username && password==this.newpassword){
      this.user.setuserloggedin();
      this.router.navigate(['dashboard']);
    }
    return false;
  }
/********************for Forgot Password Click*****************/
  /*DIALOG USED FOR FORGOT PASSWORD*/
  useremail:string //used to capture the entered user email
  openDialog(): void {
    /*A dialog is opened by calling the open method with a component to be loaded and 
    an optional config object. The open method will return an instance of MatDialogRef */
    const dialogRef = this.dialog.open(DialogforgotpComponent, {
      width: '250px',
      data: {useremail: this.useremail} //If you want to share data with your dialog
    });

    /*The MatDialogRef provides a handle on the opened dialog.It can be used to close the dialog 
     and to receive notification when the dialog has been closed. */
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.useremail=result // this store the user entered gmail/email address from the dialog
    });
  } 

}
