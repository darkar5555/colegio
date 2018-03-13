import { Component, OnInit } from '@angular/core';
import { AlumnoService, UsuarioService } from '../../services/service.index';
import { Alumno } from '../../models/alumno.model';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos : Alumno[] = [];

  constructor(private alumnoService: AlumnoService, private usuarioService: UsuarioService,
              private alertService: AlertService) { }

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

  buscarAlumnos(termino: string){
    if (termino.length <= 0 ) {
      this.cargarAlumnos();
      return;
    }

    this.alumnoService.buscarAlumno(termino)
              .subscribe((alumnos: Alumno[])=>{
                console.log(alumnos);
                this.alumnos = alumnos;
              });

  }

  borrarAlumno(alumno: Alumno){
    console.log(alumno);
    let idAlumno : any = alumno.usuario;
    if (idAlumno._id === this.usuarioService.usuario._id) {
      this.alertService.success('No puede borrarse a si mismo');
      return 
    }

    this.alumnoService.borrarAlumno(alumno._id)
                  .subscribe(borrado=>{
                    console.log(borrado);
                    this.cargarAlumnos();
                  });

  }
}
