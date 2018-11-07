import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.css']
})
export class ContactFooterComponent implements OnInit, OnChanges {

  @Input() mousePos: any;
  @Output() contact: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('footer') footer: any;


  constructor() { }


  private normalizePosition(position: number): number {
    return Math.ceil(Math.sqrt(position)) + 20;
  }


  private transform(mousePos): void {
    const x = this.normalizePosition(mousePos.x);
    const y = this.normalizePosition(mousePos.y);
    this.footer.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
  }


  public contactClick(): void {
    this.contact.emit(true);
  }


  ngOnChanges(changes: SimpleChanges) {
    const mousePos = changes.mousePos;
    const width = window.innerWidth;
    if (width > 768) {
      if (mousePos && mousePos.currentValue) {
        this.transform(mousePos.currentValue);

      }

    }

  }


  ngOnInit() {
  }

}
