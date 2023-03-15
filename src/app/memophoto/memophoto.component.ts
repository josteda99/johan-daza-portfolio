import { Component, OnInit } from '@angular/core';
import { sleep } from 'sleep-ts';

@Component({
  selector: 'app-memophoto',
  templateUrl: './memophoto.component.html',
  styleUrls: ['./memophoto.component.scss'],
})
export class MemophotoComponent implements OnInit {
  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.show = true;
    sleep(1000).then(() => {
      this.show = false;
    });
  }
}
