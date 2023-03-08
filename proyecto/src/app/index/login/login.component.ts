import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { AuthService } from 'src/app/authService/authService.component';

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
      private authService: AuthService,
    ) {}

    login() {
        this.authService.login(this.email!, this.password!).subscribe(() => {
          this.dialogRef.close();
        });
      }
      hide = true;

    cancel() {
      this.dialogRef.close();
    }
}