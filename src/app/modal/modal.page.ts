import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  // "value" passed in componentProps
@Input() nombre: string;
apellido: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private modalController: ModalController) {
      console.log(this.navParams.data);
      this.nombre = this.navParams.get('prop1');
      this.apellido = this.navParams.get('prop2');
      console.log(this.nombre);
      console.log(this.apellido);
     }

  cerrarModal() {
      // Dismiss the top modal returning some data object
    this.modalController.dismiss({
      'result': "Hola desde la Modal Page"
    })

  }

  ngOnInit() {
  }

}
