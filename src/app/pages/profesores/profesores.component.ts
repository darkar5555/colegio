import { Component, OnInit } from '@angular/core';
import { ProfesoresService, UsuarioService } from '../../services/service.index';
import { Profesor } from '../../models/profesor.model';
import { URL_SERVICIOS } from '../../config/config';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores: Profesor[] = [];
  constructor( private profesoresService: ProfesoresService, private usuarioService:
                  UsuarioService, public alertService: AlertService) { }

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

  borrarProfesor(profesor: Profesor){
    console.log(profesor);
    let idprofesor:any = profesor.usuario;
    if (idprofesor._id === this.usuarioService.usuario._id) {
      // this.alertService.success('No puede borrarse a si mismo');
      console.log('no se pudo borrar');
      return;
    }

    this.profesoresService.borrarProfesor(profesor._id)
                  .subscribe(borrado=>{
                    console.log(borrado);
                    // this.alertService.success('El profesor fue eliminado correctamente');
                    this.cargarProfesores();
                  });
  }
}
