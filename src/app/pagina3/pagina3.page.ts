import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavController} from "@ionic/angular";


@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {
pelicula: any;

  constructor(public activatedRoute: ActivatedRoute, private navCtrl: NavController) {
    this.activatedRoute.params.subscribe(param => {
      this.pelicula = <any>param;
    });
   }


  irAtras() {
    this.navCtrl.navigateBack(['/pagina2', {}]);
  }

  irPrincipal() {
    this.navCtrl.navigateBack(['/tabs/principal', {}]);
  }

  ngOnInit() {
  }

}
