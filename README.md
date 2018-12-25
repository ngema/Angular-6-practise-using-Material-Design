Angular 7 practise using Material Design

Tools:
 ->Angular 7
 ->Boostrap 4
 ->Material Design 
 ->CSS and HTML5
 

Installation Dependencies Commands In LINUX UBUNTU:
	->Update angular 6 to 7:ng update @angular/cli @angular/core
	->To add angular material: ng add @angular/material
	->To add Boostrap 4: npm install -S bootstrap
	->For password strength and validation :npm install --save @angular-material-extensions/password-strength

NB:The above commands must be run in the terminal in order for this application to run successfully

Dependencies
	->Angular developed and tested with 7.0.2

Once installed the above you need to import the main module:

import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

The only remaining part is to list the imported module in your application module. The exact method will be slightly different for the root (top-level) module for which you should end up with the code similar to (notice MatPasswordStrengthModule .forRoot()):

import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatPasswordStrengthModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
Other modules in your application can simply import MatPasswordStrengthModule:

import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatPasswordStrengthModule, ...], 
})
export class OtherModule {
} 
