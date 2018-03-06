import { RouterModule, Routes } from '@angular/router'

//Importacion de componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesores/profesor.component';
import { AlumnoComponent } from './alumnos/alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ClasesComponent } from './clases/clases.component';




const pagesRoutes: Routes = [

    { path: 'pages',                     
      component: PagesComponent,
      canActivate: [LoginGuardGuard],
      children: [
        { path: 'dashboard',              component: DashboardComponent },
        { path: 'registrar',              component: RegistrarComponent },
        { path: 'profesores',             component: ProfesoresComponent},
        { path: 'profesor/:id',           component: ProfesorComponent},
        { path: 'alumnos',                component: AlumnosComponent},
        { path: 'clase/:codigo',         component: ClasesComponent},
        // { path: 'home',                 component: HomeComponent},
        { path: '',         redirectTo:'/pages/dashboard', pathMatch: 'full' },

      ]

    },
    // { path: 'nopagefound', 
    //   component: PagesComponent,
    //   children: [
    //       { path: 'nopagefound', component: NopagefoundComponent},
    //   ]
    // },
    // { path: 'login',        component: LoginComponent},
    // { path: '**',           component: NopagefoundComponent }
    
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);