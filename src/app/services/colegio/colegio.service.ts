import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colegio } from '../../models/colegio.model';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { AlertService } from 'ngx-alerts';

@Injectable()
export class ColegioService {

  
  constructor(private http: HttpClient, private usuarioService: UsuarioService,
              private alertService: AlertService) { }


  cargarColegio(id: string){
    let url = URL_SERVICIOS + '/colegio/' + id;

    return this.http.get(url)
            .map((resp:any)=>{
              console.log(resp);
              return resp.colegio;
            });
  }

  cargarColegios(){
    let url = URL_SERVICIOS + '/colegio';

    return this.http.get(url)
            .map((resp:any)=>{
              console.log(resp);
              return resp.colegio;
            });
  }

  crearColegio(colegio: Colegio){
    let url = URL_SERVICIOS + '/colegio?toke=' + this.usuarioService.token;
    
    return this.http.post(url, colegio)
              .map((resp:any)=>{
                this.alertService.success('Colegio creado');
                return resp.colegio;
              });
  }

  borrarColegio(id: string){

    let url = URL_SERVICIOS + '/colegio/' + id;
    url += '?token=' + this.usuarioService.token;

    return this.http.delete(url)
                .map((resp:any)=>{
                  this.alertService.success('Colegio borrado');
                  return true;
                });
  }

  actualizarColegio(colegio: Colegio){
    let url = URL_SERVICIOS + '/colegio/' + colegio._id;
    url += '?token=' + this.usuarioService.token;

    return this.http.put(url, colegio)
                .map((resp:any)=>{
                  this.alertService.success('Colegio actualiado');
                  return resp.colegio;
                });
  }



}
