import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class ProfesoresService {

  totalProfesores : Number = 0;

  constructor( private http: HttpClient) { }


  cargarProfesores(){

    let url = URL_SERVICIOS + '/profesor';

    return this.http.get(url)
            .map((resp:any)=>{
              this.totalProfesores = resp.total;
              return resp.profesores
            });
  };

}
