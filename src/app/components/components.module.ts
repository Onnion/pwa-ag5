import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologysComponent } from './technologys/technologys.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ProjectComponent } from './project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    PortfolioComponent,
    TechnologysComponent,
    ContactComponent,
    ScrollTopComponent,
    ProjectComponent
  ],
  exports: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    PortfolioComponent,
    TechnologysComponent,
    ContactComponent,
    ScrollTopComponent,
    ProjectComponent
  ]
})
export class ComponentsModule { }
