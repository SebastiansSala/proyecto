import { Component } from '@angular/core';
import { HorarioModel } from 'server/models/horario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
}

async function addHorariosDefault() {
  try {
    const horarios = [
      {

        horaInicio: "19:00",
        horaFin: "20:00"
      },
      {
        horaInicio: "20:00",
        horaFin: "21:00"
      },
      {
        horaInicio: "21:00",
        horaFin: "22:00"
      }, 
    ];

    for (const horario of horarios) {
      const nuevoHorario = new HorarioModel(horario);
      await nuevoHorario.save();
    }

    console.log("Horarios por defecto añadidos correctamente");
  } catch (error) {
    console.error(error);
  }
}
