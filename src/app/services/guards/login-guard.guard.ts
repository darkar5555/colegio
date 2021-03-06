import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( public usuarioService: UsuarioService, public router: Router){}
  canActivate(){
    if (this.usuarioService.estaLogueado()) {
      console.log('paso el guard');
      return true;
    }else{
      console.log('bloqueado por el guard');
      this.router.navigate(['']);
      return false;
    }
  }
}
