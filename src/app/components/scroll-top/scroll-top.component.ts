import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {
  
  public scrollVerify: boolean;


  constructor() { }


  ngOnInit() { }


scrolltoTop() {

  const scrollToTop = window.setInterval(() => {

    const pos = window.pageYOffset;
    pos > 0 ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
    
  }, 5);
};


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const verify = (window.pageYOffset > 500 || document.documentElement.scrollTop > 500 || document.body.scrollTop > 500);
    this.scrollVerify = verify;

    return verify;
  }
}
