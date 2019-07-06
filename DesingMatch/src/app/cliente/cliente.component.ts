import { EmpresaService } from './../services/empresa.service';
import { Component, OnInit ,Injectable} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { LoginComponent } from '.././login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Empresa } from '../models/empresa';

export interface DialogData {
  showPerfil: boolean;
}
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
  showPerfil: boolean;
  datadialog: Object;

  constructor(private active: ActivatedRoute, private dialog: MatDialog, private service: EmpresaService, private _router: Router) {
    this.env.show = false;
    this.empresa = new Empresa();
  }

  ngOnInit() {
    this.loadCompany(this.active.snapshot.params['url']);
    if (sessionStorage.getItem('showperfil')) {
      this.showPerfil = JSON.parse(sessionStorage.getItem('showperfil'));
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: { name: this.showPerfil }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.datadialog = result;
      console.log(this.datadialog[0].showPerfil);
      this.showPerfil = this.datadialog[0].showPerfil;
    });
  }


  private loadCompany(url: String) {
    this.service.siteCOmpany(url).subscribe(res => {
      if (res.responseCode == 200) {
        this.empresa = res.object[0];
        sessionStorage.setItem('url', JSON.stringify(this.empresa.url));
        sessionStorage.setItem('id', JSON.stringify(this.empresa.id_empresa));
      } else {
        this._router.navigate(['']);
      }
    });
  }

  close(): void {
    sessionStorage.clear();
    this._router.navigate(['']);
    this.showPerfil = false;
  }
}
