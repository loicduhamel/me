import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaugeChartModule } from 'angular-gauge-chart';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ExpansionListComponent } from './expansion-list/expansion-list.component';
import { GcpCertificationComponent } from './degree-modal/gcp-certification/gcp-certification.component';
import { BepMrcuComponent } from './degree-modal/bep-mrcu/bep-mrcu.component';
import { BacCommerceComponent } from './degree-modal/bac-commerce/bac-commerce.component';
import { BachelorManComMarComponent } from './degree-modal/bachelor-man-com-mar/bachelor-man-com-mar.component';
import { BtsSioSlamComponent } from './degree-modal/bts-sio-slam/bts-sio-slam.component';
import { TpCdiComponent } from './degree-modal/tp-cdi/tp-cdi.component';
import { MasterEiiComponent } from './degree-modal/master-eii/master-eii.component';
import { GaugeChartComponent } from './chart-skill/gauge-chart/gauge-chart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpansionListComponent,
    GcpCertificationComponent,
    BepMrcuComponent,
    BacCommerceComponent,
    BachelorManComMarComponent,
    BtsSioSlamComponent,
    TpCdiComponent,
    MasterEiiComponent,
    GaugeChartComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GaugeChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
