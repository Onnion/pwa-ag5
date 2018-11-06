import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css']
})
export class TechnologysComponent implements OnInit {
  public slideConfig = {'slidesToShow': 7, 'slidesToScroll': 4, 'arrows': false};

  public technologys = [
    {'alt': 'css3',         'src': 'assets/images/technologys/css3.png'},
    {'alt': 'html5',        'src': 'assets/images/technologys/html5.png'},
    {'alt': 'laravel',      'src': 'assets/images/technologys/laravel.png'},
    {'alt': 'angular',      'src': 'assets/images/technologys/angular.png'},
    {'alt': 'bootstrap',    'src': 'assets/images/technologys/bootstrap.png'},
    {'alt': 'bitbucket',    'src': 'assets/images/technologys/bitbucket.png'},
    {'alt': 'digitalocean', 'src': 'assets/images/technologys/digitalocean.png'},
    {'alt': 'analytics',    'src': 'assets/images/technologys/analytics.png'}
  ];


  constructor() { }


  afterChange(e) {
    console.log('afterChange');
  }


  ngOnInit() {
  }

}
