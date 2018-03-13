import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService, AlumnoService } from '../../services/service.index';
import { AlertService } from 'ngx-alerts';
import { Alumno } from '../../models/alumno.model';
import { ActivatedRoute } from '@angular/router';
import { Colegio } from '../../models/colegio.model';
import { ColegioService } from '../../services/colegio/colegio.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  usuarios : Usuario[]= []; 
  colegios : Colegio[] = [];
  colegio: Colegio = new Colegio('','','','');
  forma : FormGroup;
  alumno : Alumno = new Alumno('','','','', null ,'','');
  usuario: Usuario = new Usuario('','','','');
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService,
              private alertService: AlertService, private alumnoService: AlumnoService,
              private activatedRoute: ActivatedRoute, private colegioService: ColegioService) { 
                activatedRoute.params.subscribe(params=>{
                  let id = params['id'];
                  if (id!== 'nuevo') {
                    this.obtenerAlumno(id);
                    // this.cargarColegio(id);
                  }
                });
              }
  
  ngOnInit() {
    this.cargarUsuarios();
    this.cargarColegios();
    this.forma = this.fb.group({
      nombre: [null, [Validators.required]],
      apellido_paterno: [null, Validators.required],
      apellido_materno: [null, [Validators.required]],
      direccion: [null, Validators.required],
      telefono: [null, Validators.required],
      usuario: [null, Validators.required],
      colegio: [null, Validators.required]
    });
  }


  getErrorApellidoPaMessage(){
    return this.forma.controls['apellido_paterno'].hasError('required') ? 'Debes entrar un valor' : 
        '';
  }
  getErrorNameMessage(){
    return this.forma.controls['nombre'].hasError('required') ? 'Debes entrar un valor' : 
        '';
  }
  getErrorApellidoMaMessage(){
    return this.forma.controls['apellido_materno'].hasError('required') ? 'Debes entrar un valor' : 
        '';
  }

  getErrorDireccionMessage(){
    return this.forma.controls['direccion'].hasError('required') ? 'Debes entrar un valor' : 
        '';
  }
  getErrorTelefonoMessage(){
    return this.forma.controls['telefono'].hasError('required') ? 'Debes entrar un valor' : 
        '';
  }
  getErrorUsuarioMessage(){
    return this.forma.controls['usuario'].hasError('required') ? 'Debes entrar un valor' : 
        '';
  }
  getErrorColegioMessage(){
    return this.forma.controls['colegio'].hasError('required') ? 'Debes entrar un valor' : 
        '';
  }

  cargarUsuarios(){
    this.usuarioService.cargarUsuarios()
                  .subscribe(usuarios=> this.usuarios= usuarios);
  }

  guardarAlumno(){
    console.log(this.forma);
    this.alertService.success('Forma valida');
    if (this.forma.invalid) {
      this.alertService.danger('El formulario es invalido');
      return;
    }
    let alumno = new Alumno(
      this.forma.value.nombre,
      this.forma.value.apellido_paterno,
      this.forma.value.apellido_materno,
      this.forma.value.direccion,
      this.forma.value.telefono,
      this.forma.value.usuario,
      this.forma.value.colegio
    );
    this.alumnoService.guardarAlumno(alumno)
                  .subscribe(alumno=> (console.log(alumno)));
  }

  obtenerAlumno(id: string){
    this.alumnoService.obtenerAlumno(id)
                .subscribe(alumno=>{
                  this.alumno = alumno;
                  console.log(this.alumno);
                });
  }

  cambioUsuario(id: string){
    console.log(event);
    this.usuarioService.cargarUsuario(id)
            .subscribe(usuario=>{
              console.log(usuario);
              this.usuario = usuario;
            });
  }

  cargarColegios(){
    this.colegioService.cargarColegios()
              .subscribe(colegio=>{
                console.log(colegio);
                this.colegios = colegio;
              })
             
  }

  cargarColegio(id: string){
    this.colegioService.cargarColegio(id)
                .subscribe(colegio=>{
                  this.colegio = colegio;
                  console.log(this.colegio);
                });
  }

  cambioColegio(id: string){
    console.log(event);
    this.colegioService.cargarColegio(id)
            .subscribe(colegio=>{
              console.log(colegio);
              this.colegio = colegio;
            });
  }
}
