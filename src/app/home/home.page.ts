import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showPassword = false;
  passwordToggleIcon = 'eye'; 

  constructor(private router: Router) {}

  signupButtonFun() {
    this.router.navigate(['signup']);
  }

  login(){
    this.router.navigate(['firstpage']);
  }

  togglePassword():void{
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
  }

}
