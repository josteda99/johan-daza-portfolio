import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faGithub, faTwitter, faInstagram, faBehance, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faBehance = faBehance;
  faYoutube = faYoutube;
  faAngleLeft = faAngleLeft;
  show: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showAnimation() {
    this.show = true;

    setTimeout(() => this.router.navigate(['/projects']), 1000);
  }
}
