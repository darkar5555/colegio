import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/service.index';
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos : Alumno[] = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.cargarAlumnos();
  }

  cargarAlumnos(){
    this.alumnoService.cargarAlumnos()
            .subscribe(alumnos=>{
              this.alumnos = alumnos;
              console.log(alumnos);
            });
  }

}
