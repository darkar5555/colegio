import { RouterModule, Routes } from '@angular/router'


//Importacion de componentes
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { WebComponent } from './web/web.component';
import { HomeComponent } from './web/home/home.component';
import { NosotrosComponent } from './web/nosotros/nosotros.component';
import { NivelesComponent } from './web/niveles/niveles.component';
import { RegisterComponent } from './login/register.component';



const appRoutes: Routes = [

    // { path: '',                     
    //   component: WebComponent,
    //   children: [
    //     { path: 'home',             component: HomeComponent },
    //     { path: 'nosotros',         component: NosotrosComponent },
    //     { path: 'niveles',         component: NivelesComponent },
    //     { path: '',         redirectTo:'/home', pathMatch: 'full' },

    //   ]

    // },
    // { path: 'home', 
    //   component: WebComponent,
    //   children: [
    //       { path: 'nopagefound', component: NopagefoundComponent},
    //   ]
    // },
    { path: 'login',        component: LoginComponent},
    { path: 'register',     component: RegisterComponent},
    { path: '**',           component: NopagefoundComponent }
    
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );