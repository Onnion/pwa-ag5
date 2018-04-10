import { BrowserModule       } from '@angular/platform-browser';
import { NgModule            } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent        } from './app.component';
import { environment         } from '../environments/environment';
import { routing             } from './app.routing';
import { APP_BASE_HREF       } from '@angular/common';

// COMPONENTS
import { HeaderComponent      } from './components/header/header.component';
import { NavbarComponent      } from './components/navbar/navbar.component';
import { PortfolioComponent   } from './components/portfolio/portfolio.component';
import { TechnologysComponent } from './components/technologys/technologys.component';
import { ContactComponent     } from './components/contact/contact.component';

// PAGES
import { HomeComponent } from './components/home/home.component';

// LIBS
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    PortfolioComponent,
    TechnologysComponent,
    ContactComponent
  ],
  imports: [
    routing,
    BrowserModule,
    SlickModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
