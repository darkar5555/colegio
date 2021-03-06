import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';


function passwordMatchValidator(g: FormGroup) {
  if( !g.get('password') || !g.get('password2')) return null;
  return g.get('password').value === g.get('password2').value
     ? null : {'mismatch': true};
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  forma : FormGroup;
  hide = true;
  constructor(public fb: FormBuilder, private alertService: AlertService,
              private usuarioService: UsuarioService, private router: Router) { }


  ngOnInit() {

    this.forma = this.fb.group({

      nombre: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      password2: [null, [Validators.required]],
      role: [null, Validators.required]
    }, {validator:passwordMatchValidator});
  }

  

  // getErrorMessage() {
  //   return this.forma.get('email').hasError('required') ? 'You must enter a value' :
  //       this.forma.get('email').hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  getErrorEmailMessage() {
    return this.forma.controls['email'].hasError('required') ? 'Debes entrar un valor' :
        this.forma.controls['email'].hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorNameMessage(){
    return this.forma.controls['nombre'].hasError('required') ? 'Debes entrar un valor' : 
        '';
  }

  // getErrorPasswordMessage(){
  //   return this.forma.controls['password'].hasError('required') ? 'Debes indicar un role' :
  //       '';
  // }

  getErrorRoleMessage(){
    return this.forma.controls['role'].hasError('required') ? 'Debes indicar un role' :
        '';
  }

  registrarUsuario(){
    console.log(this.forma.value);
    // this.alertService.success('usuario entrando');

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password,
      this.forma.value.role
    );

    this.usuarioService.crearUsuario(usuario).subscribe(resp=>{
      console.log(resp);
    });
  }

 
}
