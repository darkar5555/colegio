import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';
import { AlertService } from 'ngx-alerts';
import { UsuarioService } from '../usuario/usuario.service';
import { Profesor } from '../../models/profesor.model';
@Injectable()
export class ProfesoresService {

  totalProfesores : Number = 0;
  constructor( private http: HttpClient, private usuarioService: UsuarioService, 
                public alertService: AlertService) { }


  cargarProfesores(){

    let url = URL_SERVICIOS + '/profesor';

    return this.http.get(url)
            .map((resp:any)=>{
              this.totalProfesores = resp.total;
              return resp.profesores
            });
  };

  buscarProfesor(termino: string){
    
    console.log(termino);
    let url = URL_SERVICIOS + '/busqueda/coleccion/profesores/' + termino;
    return this.http.get(url)
            .map((resp:any)=> resp.profesores);

  }

  borrarProfesor(id: string){
    let url = URL_SERVICIOS + '/profesor/' + id;
    url += '?token=' + this.usuarioService.token;
    
    return this.http.delete(url)
              .map((resp:any)=>{
                this.alertService.success('Usuario creado con el email ' +' y su nombre ');
                return true;
              });
  }

  crearProfesor(profesor: Profesor){
    let url = URL_SERVICIOS + '/profesor?token=' + this.usuarioService.token;
    return this.http.post(url, profesor)
                  .map((resp:any)=>{
                    this.alertService.success(
                      "Profesor creado con el nombre " + profesor.nombre  + profesor.apellido_paterno
                    );
                    return resp.profesor;
                  });
  }

  obtenerProfesor(id: string){

    let url = URL_SERVICIOS + '/profesor/' + id;
    return this.http.get(url)
                .map((resp:any)=>resp.profesor);
  }

  actualizarProfesor(profesor: Profesor){

    let url = URL_SERVICIOS + '/profesor/' + profesor._id;
    url += '?token=' + this.usuarioService.token;

    return this.http.put(url, profesor)
                .map((resp:any)=> resp.profesor);
  }

  

}
