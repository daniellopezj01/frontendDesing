import { DitecompanyComponent } from './ditecompany/ditecompany.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent, },
    {
        path: 'cliente/:url', component: ClienteComponent,
        children: [
            { path: 'miPerfil', component: PerfilEmpresaComponent, },
           
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
