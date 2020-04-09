import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-chartpage',
  templateUrl: './chartpage.page.html',
  styleUrls: ['./chartpage.page.scss'],
})
export class ChartpagePage implements OnInit {

  constructor(private router: Router) { }

  dismiss(){
    this.router.navigate(['firstpage']);
  }

  ngOnInit() {
  }

}
