import { Component, OnInit } from '@angular/core';
import { sleep } from 'sleep-ts';

@Component({
  selector: 'app-oriun',
  templateUrl: './oriun.component.html',
  styleUrls: ['./oriun.component.scss'],
})
export class OriunComponent implements OnInit {
  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.show = true;
    sleep(1000).then(() => {
      this.show = false;
    });
  }
}
