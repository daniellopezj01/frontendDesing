import { Component, OnInit, Injectable } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfertarComponent } from '../ofertar/ofertar.component';
import { Router } from '@angular/router';

export interface DialogData {
  option: number;
  id: number;
}
@Component({
  selector: 'app-project-desing',
  templateUrl: './project-desing.component.html',
  styleUrls: ['./project-desing.component.scss']
})

@Injectable()
export class ProjectDesingComponent implements OnInit {
  option: number;
  object: any;
  listProject: any[];
  showprojects: boolean;
  name: any;
  id_proyecto: any;
  nombre_empresa: String;
  id: number;
  actualproject: any;
  url: any;
  constructor(private service: ProyectoService, private dialog: MatDialog, private _router: Router) {
  }

  ngOnInit() {
    this.loadinfo();
  }

  loadinfo() {
    if (sessionStorage.getItem('id')) {
      this.id = JSON.parse(sessionStorage.getItem('id'));
    }
    if (sessionStorage.getItem('nombre')) {
      this.nombre_empresa = JSON.parse(sessionStorage.getItem('nombre'));
    }
    if (sessionStorage.getItem('url')) {
      this.url = JSON.parse(sessionStorage.getItem('url'));
    }

    this.service.projects(this.id).subscribe(res => {
      if (res.responseCode == 200) {
        this.showprojects = true;
        this.listProject = res.object;
      }
    });
  }

  openOffer(id: number): void {
    const dialogRef = this.dialog.open(OfertarComponent, {
      data: { name: this.option, id_proyecto: id }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  showDesing(id: number): void {
    sessionStorage.setItem('idProject', JSON.stringify(id));
    this._router.navigate([`/cliente/${this.url.replace(/['"]+/g, '')}/DiseñoPublico`]);
  }
}
