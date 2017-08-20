import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome
    </h1>
    <ul>
      <li><a routerLink="first">First</a></li>
      <li><a routerLink="second">Second</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  
}
