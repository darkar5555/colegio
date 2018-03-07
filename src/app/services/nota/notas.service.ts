import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class NotasService {

  constructor( private http: HttpClient) { }

  cargarNotas(){

    let url = URL_SERVICIOS + '/nota';
    
    return this.http.get(url)
            .map((resp:any)=>{
              console.log(resp.notas);
              return resp.notas;

            });
  };

}
