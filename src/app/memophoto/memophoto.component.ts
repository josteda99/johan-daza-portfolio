import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memophoto',
  templateUrl: './memophoto.component.html',
  styleUrls: ['./memophoto.component.scss']
})
export class MemophotoComponent implements OnInit {
  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.show = true;
  }
}
