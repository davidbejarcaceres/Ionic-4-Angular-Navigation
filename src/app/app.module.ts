import { TabsPage } from './tabs/tabs.page';
import { AjustesPage } from './ajustes/ajustes.page';
import { Ajustes2Page } from './ajustes2/ajustes2.page';
import { Pagina3Page } from './pagina3/pagina3.page';
import { ModalPage } from './modal/modal.page';
import { HomePage } from './home/home.page';
import { PrincipalPage } from './principal/principal.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Pagina2Page } from './pagina2/pagina2.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    PrincipalPage,
    HomePage,
    Ajustes2Page,
    AjustesPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage,
    ModalPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
