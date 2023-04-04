import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Persona {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})

export class ReservacionesComponent {
  horarios: any[] = [];
  horarioSeleccionado = '';
  numPersonas: number[] = [1, 2, 3, 4, 5];;

  constructor(private http: HttpClient){
  }


}