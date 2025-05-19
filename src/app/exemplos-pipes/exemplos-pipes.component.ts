import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro:any = {
    titulo: 'Jucas onfire na programação',
    rating: '4.98321',
    numeroPaginas: 233,
    preco: 44.99,
    dataLancamento: new Date(2025, 5, 19),
    url: 'https://github.com/Jucalino'
  }

  livros: string[] = ['Java', 'Angular']

  constructor() { }

  ngOnInit(): void {
  }

}
