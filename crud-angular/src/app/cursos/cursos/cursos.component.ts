import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Cursos } from '../modulos/cursos';



@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [MatTableModule,
           MatCardModule,
           MatToolbarModule
          ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit{
  cursos: Cursos[] = [
    {_id: '1', nome: 'Angular', categoria: 'Front-end'},
    {_id: '2', nome: 'JavaSpring', categoria: 'Front-end | Back-end'},
    {_id: '3', nome: 'Java', categoria: 'Back-end'},
  ];
  displayedColumns = ['_id', 'nome', 'categoria'];

  ngOnInit(): void {
    
    
  }
  constructor(){}

 

}
