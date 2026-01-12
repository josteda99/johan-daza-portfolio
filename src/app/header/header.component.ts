import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  showAnimation() {
    this.show = true;

    setTimeout(() => this.router.navigate(['/projects']), 1000);
  }
}
