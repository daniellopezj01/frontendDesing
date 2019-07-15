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

const routes: Routes = [
    
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent, },
    {
        path: 'cliente/:url', component: ClienteComponent,
        children: [
            { path: 'miPerfil', component: PerfilEmpresaComponent, },
            { path: 'Proyectos', component: ProjectDesingComponent, },
            { path: 'DiseñoPublico', component: DisenioPublicComponent, },      
            { path: 'diseños', component: DiseniosComponent, },
            { path: 'DiseñosAdmin', component: DisenioAdminComponent, }
        ]
    },
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
