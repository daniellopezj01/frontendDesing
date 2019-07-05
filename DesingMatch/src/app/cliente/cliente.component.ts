import { EmpresaService } from './../services/empresa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { LoginComponent } from '.././login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})

@Injectable()
export class ClienteComponent implements OnInit {
  empresa: Empresa;
  env = environment;
  nombre: string;
  showPerfil: false;
  constructor(private active: ActivatedRoute, private dialog: MatDialog, private service: EmpresaService, private _router: Router) {
    this.env.show = false;
    this.empresa=  new Empresa();
  }

  ngOnInit() {
    this.loadCompany(this.active.snapshot.params['url']);
    if (sessionStorage.getItem('showperfil')) {
      this.showPerfil = JSON.parse(sessionStorage.getItem('showperfil'));
    }
  }


  openDialog(): void {
    //sessionStorage.setItem('obj',JSON.stringify(object));
    const dialogRef = this.dialog.open(LoginComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  private loadCompany(url: String) {
    console.log(url);
    this.service.siteCOmpany(url).subscribe(res => {
      if (res.responseCode == 200) {
        this.empresa = res.object[0];
        console.log(this.empresa.nombre_empresa);
        sessionStorage.setItem('url',JSON.stringify(this.empresa.url));
      } else {
        this._router.navigate(['']);
      }
    });
  }

  close(): void {
    alert("hola")
    console.log("entre a cerrar");
    sessionStorage.clear();
    this._router.navigate(['']);
    this.showPerfil = false;
  }
}
