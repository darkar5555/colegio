import { Injectable } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

//importar el operador map
import 'rxjs/add/operator/map';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';


@Injectable()
export class AlumnoService {

  constructor(private http: HttpClient, private alertService: AlertService,
              private router: Router) { 
    console.log('servicios de alumno listo');
  }

  login(alumno : Alumno){
  
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, alumno);
  };

  logOut(){
    this.router.navigate(['']);
  }

  crearUsuario( alumno: Alumno ){
    let url = URL_SERVICIOS + '/alumno';
     return this.http.post(url, alumno)
            .map((resp:any)=>{
              this.alertService.success('Alumno creado con la direccion  ' +alumno.direccion +' y su nombre ' + alumno.nombre);
              return resp.alumno;
            });
  };
}