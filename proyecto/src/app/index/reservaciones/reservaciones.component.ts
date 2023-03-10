import { Component } from '@angular/core';

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
  selectedValue = 0;

  constructor(){
  }

  personas: Persona[]= [
    {value: 1, viewValue: '1 persona'},
    {value: 2, viewValue: '2 personas'},
    {value: 3, viewValue: '3 personas'},
    {value: 4, viewValue: '4 personas'}
  ]

}