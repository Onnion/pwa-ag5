import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private windowWidth;
  private windowHeight;
  private mousePos;


  constructor() { }


  initValues(): void {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.mousePos = { x: this.windowWidth / 2, y: this.windowHeight / 2 };
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }


  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.mousePos = { x: event.pageX, y: event.pageY };
    this.clip(this.mousePos);
  }


  private clip(mousePos) {

    const pourcPos = {
      'x': mousePos.x * 100 / this.windowWidth * 2,
      'y': mousePos.y * 100 / this.windowHeight
    };

    const gapX = pourcPos.x * 30 / 200 - 15;
    const gapY = (15 * (pourcPos.y * 30 / 100 - 15)) / 100;

    let pointTop;
    let pointBottom;

    if (pourcPos.y < 50) {
      pointTop = 150 - pourcPos.x + gapY * gapX;
      pointBottom = 150 - pourcPos.x;

    } else {
      pointTop = 150 - pourcPos.x;
      pointBottom = 150 - pourcPos.x - gapY * gapX;

    }

    if (pourcPos.x < 100) {
      document.querySelector('.back').classList.add('on');
      document.querySelector('.front').classList.remove('on');

    } else if (pourcPos.x > 100) {
      document.querySelector('.back').classList.remove('on');
      document.querySelector('.front').classList.add('on');

    } else {
      document.querySelector('.back').classList.remove('on');
      document.querySelector('.front').classList.remove('on');

    }

    const front = document.querySelector('.front');
    const options = { 'clip-path': `polygon(${pointTop}% 0%, 100% 0%, 100% 100%, ${pointBottom}% 100%)` };

    this.css(front, options);

  }

  private css(el, styles): void {
    // tslint:disable-next-line:forin
    for (const property in styles) {
      el.style[property] = styles[property];

    }
}


  ngOnInit() {
    this.initValues();
    this.clip(this.mousePos);

  }

}
