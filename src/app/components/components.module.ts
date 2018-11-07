import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologysComponent } from './technologys/technologys.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ProjectComponent } from './project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { FooterComponent } from './footer/footer.component';
import { HeaderNewComponent } from './header-new/header-new.component';
import { MaterialModule } from '../app.material.module';
import { PreLoadComponent } from './pre-load/pre-load.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    TechnologysComponent,
    ContactComponent,
    ScrollTopComponent,
    ProjectComponent,
    FooterComponent,
    HeaderNewComponent,
    PreLoadComponent,
    ContactFooterComponent
  ],
  exports: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    TechnologysComponent,
    ContactComponent,
    ScrollTopComponent,
    ProjectComponent
  ]
})
export class ComponentsModule { }
