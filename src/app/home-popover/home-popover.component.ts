import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  doc(){
    window.open('https://ionicframework.com/docs/api/popover', '_blank');
    this.popoverController.dismiss();
  }
  close(){
    this.popoverController.dismiss();
  }

}
