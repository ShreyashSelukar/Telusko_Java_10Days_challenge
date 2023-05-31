import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router
  ){

  }
  navigate(action:any){
    if(action == 'user') {
      this.router.navigateByUrl('/user');
    } else {
      this.router.navigateByUrl('/admin');
    }
    
  }
}