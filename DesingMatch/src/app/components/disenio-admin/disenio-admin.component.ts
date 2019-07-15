import { Component, OnInit } from '@angular/core';
import { DetalleService } from './../../services/detalle.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-disenio-admin',
  templateUrl: './disenio-admin.component.html',
  styleUrls: ['./disenio-admin.component.scss']
})
export class DisenioAdminComponent implements OnInit {

  id_project: number;
  project: any;
  listDesing: any;
  showDesing: boolean = false;
  showinfo:boolean=  false;
  status: String = "no disponible";
  imageProcess: String = "Proceso.JPG"
  constructor(private detalleservice: DetalleService, private projectService: ProyectoService) { }

  ngOnInit() {
    if (sessionStorage.getItem('idProjectadmin')) {
      this.id_project = JSON.parse(sessionStorage.getItem('idProjectadmin'));
    } 
    this.showinfo= false;
    this.projectService.unicProjects(this.id_project).subscribe(res => {
      if (res.responseCode == 200) {
        this.project = res.object[0];
        this.detalleservice.showDesing(this.id_project).subscribe(res => {
          if (res.responseCode == 200) {
            this.showDesing = true;
            this.listDesing = res.object;
            for (const key of this.listDesing) {
              if (key.estado == this.status) {
                key.disenio = this.imageProcess;
              }
            }
            this.showinfo = true;
          } else {
            console.log(res.message);
            this.showinfo = true;
          }
        });
      }
    })
  }
}
