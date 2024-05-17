import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sleep } from 'sleep-ts';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  show: boolean = true;
  goToRoot: boolean = false;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faBehance = faBehance;
  faAngleLeft = faAngleLeft;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.show = true;
    sleep(1000).then(() => {
      this.show = false;
    });
  }

  showAnimation(root: string): void {
    this.goToRoot = true;
    sleep(1000)
      .then(() => {
        if (root == 'videogames') this.router.navigate(['projects/videogames']);
        if (root == 'about') this.router.navigate(['projects/about']);
        if (root == 'apps') this.router.navigate(['projects/apps']);
      })
      .then((response) => {
        console.log(response);
      });
  }
}
