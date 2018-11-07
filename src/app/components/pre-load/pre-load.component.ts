import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pre-load',
  template: '<div class="preload"><div class="loader"></div></div>',
  styleUrls: ['./pre-load.component.css']
})
export class PreLoadComponent implements OnInit, OnDestroy {


  constructor() { }


  ngOnInit() {
    document.querySelector('body').style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.querySelector('body').style.overflow = 'auto';

  }


}
