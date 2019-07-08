import { CreateProjectComponent } from './../create-project/create-project.component';
import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProyectoService } from '../../services/proyecto.service';

export interface DialogData {
  option: number;
}

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


@Injectable()
export class PerfilEmpresaComponent implements OnInit {

  option: number;
  object: any;
  listProject: any[];
  showprojects: boolean;
  env = environment;
  name: any;
  actualproject: any;

  constructor(private service: ProyectoService, private dialog: MatDialog) {
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
      } else if (res.responseCode == 400) {
        this.showprojects = false;
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

  update(project: Object): void {
    this.option = 2;
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      data: { name: this.option, actualproject: project }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadinfo()
    });
  }

  delete(num: number) {
    var selection = confirm("¿esta seguro de eliminar el proyecto?");
    if (selection == true) {
      this.service.DeleteProject(num).subscribe(res => {
        if (res.responseCode == 200) {
          this.loadinfo();
          if (this.listProject.length == 0) {
            this.showprojects = false;
          }
        }
      });

    }
  }
}
