import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { UsuarioService, ProfesoresService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Profesor } from '../../models/profesor.model';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  usuarios : Usuario[]= [];
  forma : FormGroup;
  constructor(private fb: FormBuilder, private alertService: AlertService,
              private usuarioService: UsuarioService, private profesorService: ProfesoresService) { }

  ngOnInit() {
    this.cargarUsuarios();
    this.forma = this.fb.group({

      nombre: [null, [Validators.required]],
      apellido_paterno: [null, Validators.required],
      apellido_materno: [null, [Validators.required]],
      dni: [null, Validators.required],
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
  getErrorDniMessage(){
    return this.forma.controls['dni'].hasError('required') ? 'Debes entrar un valor' : 
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
              .subscribe(usuarios=> this.usuarios = usuarios);
  }

  guardarProfesor(){
    console.log(this.forma);
    this.alertService.success('forma valida');
    if (this.forma.invalid) {
      return
    }
    let profesor = new Profesor(
      this.forma.value.nombre,
      this.forma.value.apellido_paterno,
      this.forma.value.apellido_materno,
      this.forma.value.dni,
      this.forma.value.direccion,
      this.forma.value.telefono,
      this.forma.value.usuario,
      this.forma.value.colegio,
    );
    this.profesorService.guardarProfesor(profesor)
                .subscribe(profesor=>{
                  console.log(profesor)
                });
  }
}
