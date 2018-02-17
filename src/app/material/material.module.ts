import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSidenavModule,
    
    

} from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatListModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSidenavModule
];

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule {}