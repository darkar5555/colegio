import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";


//Los sevicios importados
import {
    UsuarioService,
    LoginGuardGuard,
    ProfesoresService,
    AlumnoService,
    ClasesService,
    NotasService,
    MateriaService
} from './service.index';






@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers:[
        UsuarioService,
        LoginGuardGuard,
        ProfesoresService,
        AlumnoService,
        ClasesService,
        NotasService,
        MateriaService
    ],
    declarations:[]
})

export class ServiceModule{}