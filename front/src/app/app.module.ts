import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaService } from './service/empresa.service';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadComponent } from './components/head/head.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateModule } from 'primeng/animate';
import { TabViewModule } from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import { RegistroEmpresasComponent } from './components/registro-empresas/registro-empresas.component';
import { ListaEmpresasComponent } from './components/lista-empresas/lista-empresas.component';
import { RegistroVehiculoComponent } from './components/registro-vehiculo/registro-vehiculo.component';
import { RegistroConductorComponent } from './components/registro-conductor/registro-conductor.component';
import {MenuModule} from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

import {MenuItem} from 'primeng/api';
import { ParametroNavegacionService } from './service/parametro-navegation.service';
import { VehiculoService } from './service/vehiculo.service';
import { ConductorService } from './service/conductor.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { VehiculoconductorService } from './service/vehiculoconducto.service';


const routes: Routes = [
  {path: '', redirectTo: '/listemp', pathMatch: 'full'},
  {path: 'regemp/:id', component: RegistroEmpresasComponent},
  {path: 'regemp', component: RegistroEmpresasComponent},
  {path: 'listemp', component: ListaEmpresasComponent},
  {path: 'regveh', component: RegistroVehiculoComponent},
  {path: 'regcond', component: RegistroConductorComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    RegistroEmpresasComponent,
    ListaEmpresasComponent,
    RegistroVehiculoComponent,
    RegistroConductorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    AnimateModule,
    BrowserAnimationsModule,
    TabViewModule,
    DropdownModule,
    MenuModule,
    TableModule,
    PanelModule,
    ReactiveFormsModule,
    DialogModule,
    CalendarModule,
    RadioButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EmpresaService,
    VehiculoService,
    ConductorService,
    VehiculoconductorService,
    ParametroNavegacionService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
