import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Fecha {
  dia: number;
  mes: number;
  anno: number;
}

export interface Dia{
  dia: string;
  numero: number;
  seleccionado: boolean;
  cards: Card[];
}

export interface Card{
  mesa: number;
  descripcion: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  fechaActual: Fecha;
  dias: Dia[];
  cardsSeleccionadas: Card[] = [];

  constructor(private http: HttpClient){
    this.fechaActual = this.dia();
    this.dias = this.generarDias();
  }

  dia(): Fecha{
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1;
    const annoActual = fechaActual.getFullYear();
    return {dia: diaActual, mes: mesActual, anno: annoActual};
  }

  generarDias(): Dia[] {
    const dias: Dia[] = [];
    const diasSemana = ['Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo'];

    for (let i = 0; i < 6; i++) {
      const fecha = new Date(this.fechaActual.anno, this.fechaActual.mes - 1, this.fechaActual.dia + i);
      const diaSemana = diasSemana[fecha.getDay()];
      const numeroDia = fecha.getDate();
      dias.push({ dia: diaSemana, numero: numeroDia, seleccionado: false, cards:[]});
    }

    return dias;
  }

  seleccionarDia(dia: Dia) {
    this.dias.forEach(d => d.seleccionado = false);
    dia.seleccionado = true;
    /*this.obtenerCardsParaDia(dia).subscribe(cards => {
      dia.cards = cards.map(card => ({ mesa: card.mesa, descripcion: card.descripcion }));
    });*/ // cuando tenga api
  }

  obtenerCardsParaDia(dia: Dia): Card[]{
    const fecha = new Date(new Date().getFullYear(), new Date().getMonth(), dia.numero);
    const cards: Card[] = [];
    /*const url = ``//api;
    return this.http.get<Card[]>();*/
    return cards
  }
}
