import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';

import { MenuComponent } from './app/menu/menu.component';
import { AirportComponent } from './app/airport/airport.component';
import { AeronaveComponent } from './app/aeronave/aeronave.component';
import { AeronaveDetalheComponent } from './app/aeronave/aeronave-detalhe/aeronave-detalhe.component';


const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'airport', component: AirportComponent },
  { path: 'aeronave', component: AeronaveComponent },
  { path: 'aeronave-detalhe/:id', component: AeronaveDetalheComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
  ]
});
