import {  RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { LayoutModule } from '@angular/cdk/layout';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PerfilEmpresaComponent } from './components/perfil-empresa/perfil-empresa.component';
import { DitecompanyComponent } from './components/ditecompany/ditecompany.component';
import { APP_BASE_HREF } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { CommonModule }   from '@angular/common';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectDesingComponent } from './components/project-desing/project-desing.component';
import { DiseniosComponent } from './components/disenios/disenios.component';
import { OfertarComponent } from './components/ofertar/ofertar.component';
import { DisenioPublicComponent } from './components/disenio-public/disenio-public.component';
import { DisenioAdminComponent } from './components/disenio-admin/disenio-admin.component';
import { OnePageComponent } from './components/one-page/one-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ClienteComponent,
    PerfilEmpresaComponent,
    DitecompanyComponent,
    ContainerComponent,
    CreateProjectComponent,
    ProjectDesingComponent,
    DiseniosComponent,
    OfertarComponent,
    DisenioPublicComponent,
    DisenioAdminComponent,
    OnePageComponent,
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    CommonModule,
  ],
  entryComponents:[
    LoginComponent,CreateProjectComponent,OfertarComponent
  ],
  providers: [{provide:APP_BASE_HREF,useValue:''}],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
