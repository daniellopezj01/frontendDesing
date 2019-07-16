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
  pageSizeOptions: number[] = [5, 10];
  showpaginator: boolean;
  showDesing: boolean = false;
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
    this.pageEvent = new PageEvent();
    this.pageEvent.length =  this.length;
    this.pageEvent.pageIndex = 0;
  }

  managerInfo() {
    if (this.pageEvent == undefined) {
    }
  }
}
