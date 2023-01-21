import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule, 
  NbStepperModule, 
  NbInputModule, 
  NbRadioModule, 
  NbLayoutModule, 
  NbAccordionModule,
  NbBadgeModule
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';

import { GestionDocumentalComponent } from './gestion-documental.component';
import { GestionDocumentalRoutingModule } from './gestion-documental-routing.module';
import { CargarComponent } from './cargar/cargar.component';
import { FormsModule } from '@angular/forms';

// const routes: Routes = [
//   { path: '', component: GestionDocumentalComponent }
// ]

@NgModule({
  declarations: [
    GestionDocumentalComponent,
    CargarComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbButtonModule,
    NbCardModule,
    NbProgressBarModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbUserModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
    NbStepperModule,
    NbInputModule,
    NbRadioModule,
    NbLayoutModule,
    NbAccordionModule,
    NbBadgeModule,
    NgxEchartsModule,
    NgxChartsModule,
    GestionDocumentalRoutingModule,
    FormsModule,
  ]
})
export class GestionDocumentalModule { }