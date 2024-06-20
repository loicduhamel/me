import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle,
  MatExpansionModule
} from "@angular/material/expansion";

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ExpansionListComponent } from './expansion-list/expansion-list.component';
import { GcpCertificationComponent } from './degree-modal/gcp-certification/gcp-certification.component';
import { GcpFormationComponent } from "./degree-modal/gcp-formation/gcp-formation.component";
import { SecuritySensitizationComponent } from "./degree-modal/security-sensitization/security-sensitization.component";
import { GdprSensitizationComponent } from "./degree-modal/gdpr-sensitization/gdpr-sensitization.component";
import { QualitySensitizationComponent } from "./degree-modal/quality-sensitization/quality-sensitization.component";
import { EnvironmentSensitizationComponent } from "./degree-modal/environment-sensitization/environment-sensitization.component";
import { BepMrcuComponent } from './degree-modal/bep-mrcu/bep-mrcu.component';
import { BacCommerceComponent } from './degree-modal/bac-commerce/bac-commerce.component';
import { BachelorManComMarComponent } from './degree-modal/bachelor-man-com-mar/bachelor-man-com-mar.component';
import { BtsSioSlamComponent } from './degree-modal/bts-sio-slam/bts-sio-slam.component';
import { TpCdiComponent } from './degree-modal/tp-cdi/tp-cdi.component';
import { MasterEiiComponent } from './degree-modal/master-eii/master-eii.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpansionListComponent,
    GcpCertificationComponent,
    GcpFormationComponent,
    SecuritySensitizationComponent,
    GdprSensitizationComponent,
    QualitySensitizationComponent,
    EnvironmentSensitizationComponent,
    BepMrcuComponent,
    BacCommerceComponent,
    BachelorManComMarComponent,
    BtsSioSlamComponent,
    TpCdiComponent,
    MasterEiiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
