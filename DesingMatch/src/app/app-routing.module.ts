import { ContainerComponent } from './components/container/container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PerfilEmpresaComponent } from './components/perfil-empresa/perfil-empresa.component';
import { ProjectDesingComponent } from './components/project-desing/project-desing.component';
import { DiseniosComponent } from './components/disenios/disenios.component';
import { DisenioPublicComponent } from './components/disenio-public/disenio-public.component';
import { DisenioAdminComponent } from './components/disenio-admin/disenio-admin.component';
import { OnePageComponent } from './components/one-page/one-page.component';
import { DitecompanyComponent } from './components/ditecompany/ditecompany.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent, },
    { path: 'notFound', component: DiseniosComponent, },
    {
        path: ':url', component: ClienteComponent,
        children: [
            { path: 'home', component: OnePageComponent, },
            { path: 'miPerfil', component: PerfilEmpresaComponent, },
            { path: 'Proyectos', component: ProjectDesingComponent, },
            { path: 'DiseñoPublico', component: DisenioPublicComponent, }, 
            { path: 'DiseñosAdmin', component: DisenioAdminComponent, },
            { path: 'p', component: DitecompanyComponent, }
        ]
    },
    { path: '', component: HomeComponent   },
    { path: '**', component: DiseniosComponent, },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            scrollOffset: [0, 53]
        },
    )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
