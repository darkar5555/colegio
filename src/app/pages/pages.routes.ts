import { RouterModule, Routes } from '@angular/router'

//Importacion de componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';



const pagesRoutes: Routes = [

    { path: 'pages',                     
      component: PagesComponent,
      children: [
        { path: 'dashboard',              component: DashboardComponent },
        // { path: 'alumnos',             component: NosotrosComponent },
        // { path: 'home',                 component: HomeComponent},
        { path: '',         redirectTo:'/pages', pathMatch: 'full' },

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