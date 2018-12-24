
import { LoginformComponent } from './loginform/loginform.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule,MatFormFieldModule,MatInputModule,MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule,MatCardModule} from '@angular/material';
import {MatDatepickerModule,MatNativeDateModule,MatIconModule,MatSelectModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';


import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';//NB PASSWORD
import {MatSlideToggleModule} from '@angular/material';
import { FormsModule } from '@angular/forms';//always import formmodules because you are 
                                            //using forms and ngModel apply to forms

import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {RegistrationService} from './registration.service';
const approuter:Routes=[
  {path:'',component:LoginformComponent},
   {path:'dashboard',canActivate:[AuthguardGuard],component:DashboardComponent},
   {path:'register',component:RegisterComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(approuter),
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatPasswordStrengthModule,
    MatSlideToggleModule,  HttpClientModule
  ],
  providers: [UserService,AuthguardGuard,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
