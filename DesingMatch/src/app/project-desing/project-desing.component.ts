import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-project-desing',
  templateUrl: './project-desing.component.html',
  styleUrls: ['./project-desing.component.scss']
})
export class ProjectDesingComponent implements OnInit {
  option: number;
  object: any;
  listProject: any[];
  showprojects: boolean;
  name: any;
  actualproject:any;

  constructor(private service: ProyectoService, ) {
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
}
