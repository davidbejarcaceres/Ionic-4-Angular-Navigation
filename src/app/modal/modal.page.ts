import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

@Injectable()
export class ModalPage implements OnInit {


@Input() nombre: any;
@Input() apellido: any;

constructor(private modalController: ModalController, private parametros: ActivatedRoute) {

}

  ngOnInit(): void {
    console.log(this.nombre);
    console.log(this.apellido);
  }
  
  cerrarModal() {
    // Dismiss the top modal returning some data object
    this.modalController.dismiss({
      result: "Hola desde la Modal Page"
    })
  }

}
