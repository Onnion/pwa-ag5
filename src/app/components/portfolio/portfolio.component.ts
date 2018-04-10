import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  public projects = [
    {"alt": "flaviosiqueiraadv", "src": "assets/images/projects/flaviosiqueiraadv.png", "href":"http://flaviosiqueiraadv.com.br"},
    {"alt": "vestibularcidadao", "src": "assets/images/projects/vestibular_cidadao.png", "href":"https://vestibularcidadao.com.br"}

  ]
  
  navigateBlank (href: string) {
    const win = window.open(href, '_blank');
    win.focus();
  }

  ngOnInit () {
  }

}
