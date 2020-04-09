import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdditemPage } from '../additem/additem.page';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})
export class FirstpagePage implements OnInit {

  constructor(public modalController: ModalController, private router: Router) {

   }

   itemPage() {
    this.router.navigate(['itempage']);
  }

  chartPage(){
    this.router.navigate(['chartpage']);
  }

  


   async presentModal(){
     const modal = await this.modalController.create({
      component: AdditemPage
     });

     await modal.present();
   }

  ngOnInit() {
  }

}
