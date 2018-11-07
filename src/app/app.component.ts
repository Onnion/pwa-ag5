import { Component, HostListener } from '@angular/core';
import { fadeOut } from './helpers/animations/animations.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeOut]

})
export class AppComponent {

  public loading = true;

  @HostListener('window:load', ['$event'])
  loadHandler(event) {
    setTimeout( () => {
      this.loading = false;

    }, 1000);
  }

}
