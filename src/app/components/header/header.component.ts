import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }


  ngOnInit() { }


  navScroll(path) {

    const targ = <HTMLElement>document.querySelector('#' + path);
    targ.scrollIntoView({ behavior: 'smooth', block: 'start' });

  };


}
