import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    routing,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
