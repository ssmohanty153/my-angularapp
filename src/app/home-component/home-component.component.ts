import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
  standalone:true
})
export class HomeComponentComponent {
  title:string = 'Register User';

}
