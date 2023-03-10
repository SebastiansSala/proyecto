import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {


    email?: string;
    password?: string;
  
    constructor(
      private dialogRef: MatDialogRef<LoginComponent>,
    ) {}
      hide = true;

    cancel() {
      this.dialogRef.close();
    }
}