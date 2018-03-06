import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class AlumnoService {

  totalAlumnos : Number = 0;

  constructor( private http : HttpClient) { }


  cargarAlumnos(){
    let url = URL_SERVICIOS + '/alumno';

    return this.http.get(url)
          .map((resp: any)=>{
            this.totalAlumnos = resp.total;
            return resp.alumnos;
          });
  }

}
