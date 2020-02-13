import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { app_routing } from './app.routes'

import { AppComponent } from './app.component';
import { ProcesosComponent } from './components/procesos/procesos.component'
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TitleComponent } from './components/shared/title/title.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { ModalNuevoProcesoComponent } from './components/shared/modals/modal-nuevo-proceso/modal-nuevo-proceso.component';



@NgModule({
  declarations: [
    AppComponent,
    ProcesosComponent,
    NavbarComponent,
    TitleComponent,
    IndicadoresComponent,
    ModalNuevoProcesoComponent
    
  ],
  imports: [
    BrowserModule,
    app_routing,
    ChartsModule,
    HttpClientModule,
    NgbModule,
    ModalModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalNuevoProcesoComponent ]
})
export class AppModule { }
