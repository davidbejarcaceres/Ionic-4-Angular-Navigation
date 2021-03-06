import { ModalPage } from './../modal/modal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavParams } from '@ionic/angular';
import { TabsPage } from './tabs.page';
import { ModalPageModule } from './../modal/modal.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'principal',
        loadChildren: '../principal/principal.module#PrincipalPageModule'
      },
      {
        path: 'ajustes',
        loadChildren: '../ajustes/ajustes.module#AjustesPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/principal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  
  exports: [RouterModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
