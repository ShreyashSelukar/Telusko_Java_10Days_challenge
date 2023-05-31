import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quizApp';
  constructor(
    private router: Router
  ){

  }
  navigate(action:any){
    this.router.navigateByUrl('/admin');
  }
}
