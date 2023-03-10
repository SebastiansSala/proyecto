import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  nombre = '';
  hora = '';
  numPersonas = 0;

  constructor(private dialog: MatDialog, private http: HttpClient){
  }


}