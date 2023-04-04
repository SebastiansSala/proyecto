import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {
  email?: string;
  password?: string;
  
  constructor(private dialog: MatDialog){
  }

  hide = true;
  openLoginDialog() {
    this.dialog.open(LoginComponent, {
    });
  }
}