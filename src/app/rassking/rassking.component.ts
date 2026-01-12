import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rassking',
  templateUrl: './rassking.component.html',
  styleUrls: ['./rassking.component.scss']
})
export class RasskingComponent implements OnInit {
  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.show = true;
    setTimeout(() => (this.show = false), 1000);
  }
}
