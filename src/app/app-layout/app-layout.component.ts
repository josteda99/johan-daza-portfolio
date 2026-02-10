import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() tecnologies = '';
  @Input() extraMessage = '';
  @Input() link = '';
  @Input() screenshots: string[] = [];

  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.show = true;
    setTimeout(() => (this.show = false), 1000);
  }
}
