import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../services/service.index';
import { Nota } from '../../models/nota.model';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas : Nota[] = [];

  constructor( private notasService: NotasService) { }

  ngOnInit() {
    this.cargarNotasTodos();
  }

  cargarNotasTodos(){
    this.notasService.cargarNotas()
            .subscribe(notas=>{
              this.notas = notas;
              console.log(this.notas);
              console.log('algo paso aqui');
            });
  };


}
