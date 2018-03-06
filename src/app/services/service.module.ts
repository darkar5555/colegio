import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";


//Los sevicios importados
import {
    UsuarioService,
    LoginGuardGuard
} from './service.index';

//Probando beunche de CesarTuDady



@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers:[
        UsuarioService,
        LoginGuardGuard
    ],
    declarations:[]
})

export class ServiceModule{}