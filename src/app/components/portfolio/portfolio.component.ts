import { Component, OnInit } from '@angular/core';
import { listObjShow } from '../../helpers/animations/animations.helper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [listObjShow]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  public projects = [
    {'alt': 'flaviosiqueiraadv', 'src': 'assets/images/projects/flaviosiqueiraadv.png', 'href': 'http://flaviosiqueiraadv.com.br'},
    {'alt': 'vestibularcidadao', 'src': 'assets/images/projects/vestibular_cidadao.png', 'href': 'https://vestibularcidadao.com.br'}
  ];

  ngOnInit () {
  }

}
