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

  enviarHorario(event: any) {
    event.preventDefault();
    
    const reserva = {
      horario: this.horarioSeleccionado,
      numPersonas: this.numPersonas
    };

    this.http.post('/api/reservas', reserva).subscribe((data: any) => {
      console.log(data);
      alert('Reserva realizada con éxito');
    }, error => {
      console.error(error);
      alert('Error al hacer la reserva');
    });
  }

  ngOnInit() {
    this.http.get('/api/horarios').subscribe((data: any) => {
      this.horarios = data;
    });
  }

}