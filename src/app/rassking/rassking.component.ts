import { Component, OnInit } from '@angular/core';
import { sleep } from 'sleep-ts';

@Component({
  selector: 'app-rassking',
  templateUrl: './rassking.component.html',
  styleUrls: ['./rassking.component.scss'],
})
export class RasskingComponent implements OnInit {
  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.show = true;
    sleep(1000).then(() => {
      this.show = false;
    });
  }
}
