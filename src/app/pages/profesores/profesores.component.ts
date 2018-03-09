import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../services/service.index';
import { Profesor } from '../../models/profesor.model';
import { URL_SERVICIOS } from '../../config/config';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores: Profesor[] = [];
  constructor( private profesoresService: ProfesoresService) { }

  ngOnInit() {
    this.cargarProfesores();
  }

  cargarProfesores(){
    this.profesoresService.cargarProfesores()
            .subscribe(profesores=>{
              this.profesores = profesores;
            });
  }

  buscarProfesores(termino:string){
    if (termino.length <= 0) {
      this.cargarProfesores();
      return;
    }

    this.profesoresService.buscarProfesor(termino)
                      .subscribe((profesores: Profesor[])=>{
                        this.profesores = profesores;
                      });
  }
}
