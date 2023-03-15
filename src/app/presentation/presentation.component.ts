import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { sleep } from 'sleep-ts';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faBehance = faBehance;
  faAngleLeft = faAngleLeft;
  show: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showAnimation() {
    this.show = true;
    sleep(1000)
      .then(() => {
        this.router.navigate(['/projects']);
      })
      .then((response: any) => {
        console.log(response);
      });
  }
}
