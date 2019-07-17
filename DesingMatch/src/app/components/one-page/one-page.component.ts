import { DetalleService } from 'src/app/services/detalle.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.scss']
})
export class OnePageComponent implements OnInit {

  
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 5, 10];
  showinfo: boolean;
  pageEvent: PageEvent;
  id_empresa: number;
  object: any;
  size:number;
  show: any;
  constructor(private dservice: DetalleService) {

  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
    this.pageEvent = new PageEvent();

    this.pageEvent.pageIndex = 0;
    this.size =1;
    this.managerInfo();
  }

  managerInfo() {
    if (sessionStorage.getItem('id')) {
      this.id_empresa = JSON.parse(sessionStorage.getItem('id'));
    }
    this.dservice.informationOnePage(this.id_empresa).subscribe(res => {
      if (res.responseCode == 200) {
      this.object = res.object;
      this.length = this.object.length;
      this.pageEvent.length = this.length;
      this.showinfo = true;
    } else {
        console.log(res.message);
      }
    });

  }
}
