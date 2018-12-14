import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userlogin;
  private username;
  constructor() { 
    this.userlogin=false;
  }
  setuserloggedin(){
    this.userlogin=true;
  }

  getuserloggedin(){
    return this.userlogin;
  }
}
