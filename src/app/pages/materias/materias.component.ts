import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../services/service.index';
import { Materia } from '../../models/materia.model';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias : Materia[] = [];

  constructor( private materiaService: MateriaService) { }

  ngOnInit() {
    this.cargarMaterias();
  }

  cargarMaterias(){
    this.materiaService.cargarMaterias()
              .subscribe(materias=>{
                this.materias = materias;
              });
  };

}
