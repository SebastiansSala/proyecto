import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { AuthService } from 'src/app/authService/authService.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    username?: string;
    password?: string;
  
    constructor(
      private dialogRef: MatDialogRef<LoginComponent>,
      private authService: AuthService
    ) {}

    login() {
        this.authService.login(this.username!, this.password!).subscribe(() => {
          this.dialogRef.close();
        });
      }

    cancel() {
      this.dialogRef.close();
    }
}