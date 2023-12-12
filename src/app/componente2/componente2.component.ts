import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {

  exibirTexto:boolean = false
  
  visibilidadeTexto():void {
    this.exibirTexto = !this.exibirTexto
  };

  nomes:string[] = ['João','Joã','Jão','J','oão','ão','o']

  linguagem:string = '';
}
