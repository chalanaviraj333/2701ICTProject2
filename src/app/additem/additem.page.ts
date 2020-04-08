import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  dismiss(){
    this.modalController.dismiss();
  }

}
