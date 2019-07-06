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
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { DitecompanyComponent } from './ditecompany/ditecompany.component';
import { APP_BASE_HREF } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { CommonModule }   from '@angular/common';
import { CreateProjectComponent } from './create-project/create-project.component';
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
    LoginComponent,CreateProjectComponent
  ],
  providers: [{provide:APP_BASE_HREF,useValue:''}],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
