import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface dialogdata
{
  useremail:string;
}
@Component({
  selector: 'app-dialogforgotp',
  templateUrl: './dialogforgotp.component.html',
  styleUrls: ['./dialogforgotp.component.css']
})
export class DialogforgotpComponent implements OnInit {
  /*To access the data in your dialog component, you have to use the MAT_DIALOG_DATA injection token */
  constructor(public dialogref:MatDialogRef<DialogforgotpComponent>,@Inject(MAT_DIALOG_DATA) public data:dialogdata) 
  { }

  ngOnInit() {
  }
  /*For closing the dialog */
  NoClick():void{
    this.dialogref.close()
  }

}
