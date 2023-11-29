import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {

  exibirTexto:boolean = false
  
  visibilidadeTexto():void {
    this.exibirTexto = !this.exibirTexto
  };
}
