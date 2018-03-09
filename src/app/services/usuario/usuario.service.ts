import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

//importar el operador map
import 'rxjs/add/operator/map';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token : string;

  constructor(private http: HttpClient, private alertService: AlertService,
              private router: Router) { 
    this.cargarStorage();
    console.log('servicios de usuario listo');
  }

  estaLogueado(){
  
    return (this.token.length > 5)? true : false;

  };

  cargarStorage(){
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario =JSON.parse( localStorage.getItem('usuario'));
    }else{
      this.token = '';
      this.usuario = null;
    }
  }


  guardarStorage(id: string, token: string, usuario: Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
    // console.log(localStorage.getItem('usuario'));
    // console.log(localStorage.getItem('token'));
  };

  login(usuario : Usuario){
  
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
                    .map( (resp : any) =>{
                      // localStorage.setItem('id', resp.id);
                      // localStorage.setItem('token', resp.token);
                      // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
                      this.guardarStorage(resp.id, resp.token, resp.usuario);
                      return true;
                    });
  };

  logOut(){
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');
    this.router.navigate(['']);
  }

  crearUsuario( usuario: Usuario ){
    let url = URL_SERVICIOS + '/usuario';
     return this.http.post(url, usuario)
            .map((resp:any)=>{
              this.alertService.success('Usuario creado con el email ' +usuario.email +' y su nombre ' + usuario.nombre);
              return resp.usuario;
            });
  };
}
