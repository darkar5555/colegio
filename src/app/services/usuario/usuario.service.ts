import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

//importar el operador map
import 'rxjs/add/operator/map';
import { AlertService } from 'ngx-alerts';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient, private alertService: AlertService) { 
    console.log('servicios de usuario listo');
  }

  login(usuario : Usuario){
  
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario);
  };

  crearUsuario( usuario: Usuario ){
    let url = URL_SERVICIOS + '/usuario';
     return this.http.post(url, usuario)
            .map((resp:any)=>{
              this.alertService.success('Usuario creado con el email ' +usuario.email +' y su nombre ' + usuario.nombre);
              return resp.usuario;
            });
  };
}
