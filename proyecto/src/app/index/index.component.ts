import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {

  constructor(private dialog: MatDialog){
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px'
    });
  }
}