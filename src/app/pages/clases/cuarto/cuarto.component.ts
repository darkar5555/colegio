import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { ClasesService } from '../../../services/service.index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.css']
})
export class CuartoComponent implements OnInit {

  alumnos: Alumno[] = [];
  codigo = this.route.snapshot.params['codigo'];
  constructor( private claseService: ClasesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cargarClase();
  }

  cargarClase(){
    this.claseService.cargarClase(this.codigo)
            .subscribe(clase=>{
              this.alumnos = clase
            });
  }

}
