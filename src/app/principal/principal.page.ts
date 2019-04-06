import { ModalPage } from './../modal/modal.page';
import { Component, OnInit } from '@angular/core';
import {NavController, ModalController, NavParams} from "@ionic/angular";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private navCtrl: NavController, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        'prop1': "David",
        'prop2': "Bejar"
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data.result);
  }

  navegarA2(){
    this.navCtrl.navigateForward(['/pagina2', {}]);
  }

}
