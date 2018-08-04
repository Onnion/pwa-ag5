import { BrowserModule       } from '@angular/platform-browser';
import { NgModule            } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent        } from './app.component';
import { environment         } from '../environments/environment';
import { routing             } from './app.routing';
import { APP_BASE_HREF       } from '@angular/common';
import { HttpClientModule    } from '@angular/common/http';
import { FormsModule         } from '@angular/forms';

// COMPONENTS
import { HeaderComponent      } from './components/header/header.component';
import { NavbarComponent      } from './components/navbar/navbar.component';
import { PortfolioComponent   } from './components/portfolio/portfolio.component';
import { TechnologysComponent } from './components/technologys/technologys.component';
import { ContactComponent     } from './components/contact/contact.component';

// PAGES
import { HomeComponent } from './components/home/home.component';

// LIBS
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
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
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
