import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from "../material/material.module";





@NgModule({

    imports:[
        RouterModule,
        CommonModule,
        MaterialModule
    ],
    declarations:[
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent
    ],
    exports:[
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent
    ],
    
    

})

export class ShareModule{}