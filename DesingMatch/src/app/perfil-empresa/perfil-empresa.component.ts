import { CreateProjectComponent } from './../create-project/create-project.component';
import { Component, OnInit, Injectable } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';
import { environment } from './../../environments/environment.prod';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  option: number;
}

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.scss'],
})


@Injectable()
export class PerfilEmpresaComponent implements OnInit {
  
  option: number;
  object: any;
  listProject: any[];
  showprojects: boolean;
  env = environment;
  name: any;
  actualproject:any;

  constructor(private service: EmpresaService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadinfo();
  }

  loadinfo() {
    if (sessionStorage.getItem('emp')) {
      this.object = JSON.parse(sessionStorage.getItem('emp'));
    }
    this.service.projects(this.object[0].id_empresa).subscribe(res => {
      if (res.responseCode == 200) {
        this.showprojects = true;
        this.listProject = res.object;
      }
    });
  }

  create(): void {
    this.option = 1;
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      data: { name: this.option }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadinfo()
    });
  }

  update(project:Object): void {
    this.option = 2;
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      data: { name: this.option , actualproject:project}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadinfo()
    });
  }
}
