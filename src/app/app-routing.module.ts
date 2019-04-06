import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModalPage } from './modal/modal.page';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'pagina3', loadChildren: './pagina3/pagina3.module#Pagina3PageModule' },
  { path: 'ajustes2', loadChildren: './ajustes2/ajustes2.module#Ajustes2PageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'pagina2', loadChildren: './pagina2/pagina2.module#Pagina2PageModule' },
  { path: 'ajustes', loadChildren: './ajustes/ajustes.module#AjustesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
