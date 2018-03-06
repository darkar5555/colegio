import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class ClasesService {

  constructor( private http : HttpClient) { }



  cargarClase(codigo: string){
    let url = URL_SERVICIOS + '/clase/' + codigo;
    return this.http.get(url)
          .map((resp:any)=>{
            return resp.clases;
          });
  }

}
