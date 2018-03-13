import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { AlertService } from 'ngx-alerts';
import { Alumno } from '../../models/alumno.model';

@Injectable()
export class AlumnoService {

  totalAlumnos : Number = 0;

  constructor( private http : HttpClient, private usuarioService: UsuarioService,
                private alertService: AlertService) { }


  cargarAlumnos(){
    let url = URL_SERVICIOS + '/alumno';

    return this.http.get(url)
          .map((resp: any)=>{
            this.totalAlumnos = resp.total;
            return resp.alumnos;
          });
  }

  buscarAlumno(termino: string){
    let url = URL_SERVICIOS + '/busqueda/coleccion/alumnos/' + termino;
    return this.http.get(url)
              .map((resp:any)=>resp.alumnos);
  }

  borrarAlumno(id: string){
    let url = URL_SERVICIOS + '/alumno/' + id;
    url += '?token=' + this.usuarioService.token;

    return this.http.delete(url)
              .map((resp:any)=>{
                this.alertService.success('Alumno borrado');
                return true;
              });
  }

  guardarAlumno(alumno: Alumno){
    let url = URL_SERVICIOS + '/alumno?token=' + this.usuarioService.token;

    return this.http.post(url, alumno)
                .map((resp:any)=>{
                  this.alertService.success(
                    "Alumno creado con el nombre " + alumno.nombre + " "+ alumno.apellido_paterno
                  );
                  return resp.alumno;
                });
  }

  obtenerAlumno(id: string){
    let url = URL_SERVICIOS + '/alumno/' + id;
    return this.http.get(url)
              .map((resp:any)=> resp.alumno);
  }

  actualizarAlumno(alumno: Alumno){
    let url = URL_SERVICIOS + '/alumno/' + alumno._id;
    url += '?token=' + this.usuarioService.token;

    return this.http.put(url, alumno)
                .map((resp:any)=>resp.alumno);
  }
}
