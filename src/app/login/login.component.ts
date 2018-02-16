import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { AlertService } from 'ngx-alerts';
import { Usuario } from '../models/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formaLogin : FormGroup;
  hide = true;
  constructor(public router: Router, public fb: FormBuilder, private usuarioService: UsuarioService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.formaLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    });

  }

  getErrorEmailMessage(){
    return this.formaLogin.controls['email'].hasError('required') ? 'Debes entrar el correo' :
        this.formaLogin.controls['email'].hasError('email') ? 'Email no valido' :
            '';
  };

  logearUsuario(){
    console.log(this.formaLogin.value);
    if( this.formaLogin.invalid){
      this.alertService.danger('Credenciales no validas');
      return;
    } 
    let usuario = new Usuario(
      null,
      this.formaLogin.value.email,
      this.formaLogin.value.password,
      null
    );
    this.usuarioService.login(usuario)
          .subscribe(resp=>{
            console.log(resp);
          });
  };

  ingresar(){
    this.router.navigate(['/nopagefound']);
  };
}
