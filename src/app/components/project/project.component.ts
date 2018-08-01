import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input('project') project: any;
  @Input('delay') delay: any;


  constructor() { }


  ngOnInit() { }


  navigateBlank (href: string) {

    const win = window.open(href, '_blank');
    win.focus();

  }


}
