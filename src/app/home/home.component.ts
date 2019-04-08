import { Component } from '@angular/core';
import { SignUpComponent } from "../common/auth/sign-up.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Training Scheduler';

 

  constructor() { 
  }

}
