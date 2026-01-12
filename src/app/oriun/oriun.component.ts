import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oriun',
  templateUrl: './oriun.component.html',
  styleUrls: ['./oriun.component.scss']
})
export class OriunComponent implements OnInit {
  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.show = true;
    setTimeout(() => (this.show = false), 1000);
  }
}
