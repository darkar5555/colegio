import { Injectable } from '@angular/core';
import { Usuario } from '../../models/profesor.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

//importar el operador map
import 'rxjs/add/operator/map';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Injectable()
export class ProfesorService {

  constructor(private http: HttpClient, private alertService: AlertService,
              private router: Router) { 
    console.log('servicios de profesor listo');
  }

  login(profesor : Profesor){
  
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, profesor);
  };

  logOut(){
    this.router.navigate(['']);
  }

  crearUsuario( profesor: Profesor ){
    let url = URL_SERVICIOS + '/profesor';
     return this.http.post(url, profesor)
            .map((resp:any)=>{
              this.alertService.success('Profesor creado con el email ' +usuario.email +' y su nombre ' + usuario.nombre);
              return resp.profesor;
            });
  };
}
