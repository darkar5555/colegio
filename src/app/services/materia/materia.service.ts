import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class MateriaService {

  totalMaterias : Number = 0;
  constructor(private http: HttpClient) { }


  cargarMaterias(){
    let url = URL_SERVICIOS + '/materia';

    return this.http.get(url)
              .map((resp:any)=>{
                this.totalMaterias = resp.conteo;
                return resp.materias;
              });
  };

  buscarMateria(termino: string){
    let url = URL_SERVICIOS + '/busqueda/coleccion/materias/' + termino;

    return this.http.get(url)
              .map((resp:any)=> resp.materias);
  }
}
