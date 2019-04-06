import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  peliculas: any[] = [ 
    {"titulo": "Encadenados", "director": "Alfred Hitchcock"},
    {"titulo": "Casino", "director": "Martin Scorsesse"}
  ]

  constructor(private navCtrl: NavController) { }


  irAtras() {
    this.navCtrl.navigateBack(['/tabs/principal', {}]);
  }

  irPrincipal() {
    this.navCtrl.navigateBack(['/tabs/principal', {}]);
  }

  ngOnInit() {
  }

  

}
