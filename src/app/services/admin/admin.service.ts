import { Injectable } from '@angular/core';
import { Usuario } from '../../models/admin.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

//importar el operador map
import 'rxjs/add/operator/map';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient, private alertService: AlertService,
              private router: Router) { 
    console.log('servicios de admin listo');
  }

  login(admin : Admin){
  
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, admin);
  };

  logOut(){
    this.router.navigate(['']);
  }

  crearUsuario( admin: Admin ){
    let url = URL_SERVICIOS + '/admin';
     return this.http.post(url, admin)
            .map((resp:any)=>{
              this.alertService.success('Admin creado con el email ' +usuario.email +' y su nombre ' + usuario.nombre);
              return resp.admin;
            });
  };
}