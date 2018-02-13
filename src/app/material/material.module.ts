import { NgModule } from '@angular/core';

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
];

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule {}