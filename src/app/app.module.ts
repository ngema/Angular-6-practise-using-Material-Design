
import { LoginformComponent } from './loginform/loginform.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule,MatFormFieldModule,MatInputModule,MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule,MatCardModule} from '@angular/material';
import {MatDatepickerModule,MatNativeDateModule,MatIconModule,MatSelectModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';
const approuter:Routes=[
  {path:'',component:LoginformComponent},
   {path:'dashboard',canActivate:[AuthguardGuard],component:DashboardComponent}]
@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    DashboardComponent
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
    MatRadioModule
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
