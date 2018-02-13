import { RouterModule, Routes } from '@angular/router'
//Importacion de componentes
import { WebComponent } from './web.component';
import { NivelesComponent } from './niveles/niveles.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';



const webRoutes: Routes = [

    { path: '',                     
      component: WebComponent,
      children: [
        { path: 'niveles',              component: NivelesComponent },
        { path: 'nosotros',             component: NosotrosComponent },
        { path: 'home',                 component: HomeComponent},
        { path: '',         redirectTo:'/home', pathMatch: 'full' },

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


export const WEB_ROUTES = RouterModule.forChild(webRoutes);