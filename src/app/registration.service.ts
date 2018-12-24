import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  USERNAME:string;//used for initiliasation 
  PASSWORD:string;              
  private register=new BehaviorSubject<string>(this.USERNAME);
  private password=new BehaviorSubject<string>(this.PASSWORD);
  cast=this.register.asObservable(); //creating an observer
  castpassword=this.password.asObservable(); 

  constructor() { }

  editusername(newusername){
    this.register.next(newusername);
 
    console.log(newusername);//newusername carries the registered username from the register component  
  }

  edituserpassword(newpassword){
    this.password.next(newpassword);
    console.log(newpassword);//newpassword carries the registered username from the register component
  }
}
