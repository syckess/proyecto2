import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'servicios', component: ServiciosComponent },
  { path: 'quienes', component: QuienesComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    QuienesComponent,
    ServiciosComponent,
    NovedadesComponent,
    ContactoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
