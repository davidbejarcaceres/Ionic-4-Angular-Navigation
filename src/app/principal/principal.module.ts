import { AppModule } from './../app.module';
import { ModalPageModule } from './../modal/modal.module';
import { ModalPage } from './../modal/modal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  }
];

@NgModule({
  entryComponents: [],
  imports: [    
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageModule,
    RouterModule.forChild([{ path: '', component: PrincipalPage }]),
  ],
  declarations: [PrincipalPage],
  exports: []
})
export class PrincipalPageModule {}
