import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RamosComponent } from './ramos/ramos.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSortModule, MatToolbarModule,MatIconModule,MatListModule} from '@angular/material';
import { RamosService } from './services/ramos.service';
import { DataTableComponent } from './data-table/data-table.component';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { HomeProfesorComponent } from './home-profesor/home-profesor.component';
import { DonutComponent } from './donut/donut.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoEstudianteComponent } from './grafico-estudiante/grafico-estudiante.component';
import { DonutprofesorComponent } from './donutprofesor/donutprofesor.component';
import { RamospComponent } from './ramosp/ramosp.component';
import { DataTableProfesorComponent } from './data-table-profesor/data-table-profesor.component';
import { AvisoComponent } from './aviso/aviso.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'ramos', component: RamosComponent},
  {path: 'ramosp', component: RamospComponent},
  {path: 'home',component: HomeComponent},
  {path: 'homep',component: HomeProfesorComponent},
  {path: 'grafico',component: GraficoEstudianteComponent},
  {path: 'aviso',component: AvisoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RamosComponent,
    DataTableComponent,
    MainNavComponent,
    HomeComponent,
    HomeProfesorComponent,
    DonutComponent,
    GraficoEstudianteComponent,
    DonutprofesorComponent,
    RamospComponent,
    DataTableProfesorComponent,
    AvisoComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatPaginatorModule, 
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ChartsModule,

  ],
  providers: [RamosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
