import { Component, OnInit,Injectable } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfertarComponent } from '../ofertar/ofertar.component';

export interface DialogData {
  option: number;
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
  nombre_empresa:String;
  id:number;
  actualproject:any;

  constructor(private service: ProyectoService, private dialog: MatDialog) {
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
    this.service.projects(this.id).subscribe(res => {
      if (res.responseCode == 200) {
        this.showprojects = true;
        this.listProject = res.object;
      }
    });
  }

  
  openOffer(): void {
    const dialogRef = this.dialog.open(OfertarComponent, {
      data: { name: this.option }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
