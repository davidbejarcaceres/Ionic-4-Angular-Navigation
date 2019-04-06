import { CommonModule } from '@angular/common';
import { ModalPage } from './../modal/modal.page';
import { Component, OnInit } from '@angular/core';
import {NavController, ModalController, NavParams} from "@ionic/angular";
import { ModalPageModule } from './../modal/modal.module';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  
  async mostrarModal() {
    console.log("Inicia Modal");
    
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        nombre: "David",
        apellido: "Bejar"
      }
    });
    modal.present();
    // await modal.onDidDismiss().then(res => alert(JSON.stringify(res)));
    await modal.onDidDismiss().then(res => console.log(res.data));
  }

  navegarA2(){
    this.navCtrl.navigateForward(['/pagina2', {}]);
  }

}
