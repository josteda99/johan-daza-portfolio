import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { sleep } from 'sleep-ts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  show: boolean = true;
  router: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.show = true;
    sleep(1000).then(() => {
      this.show = false;
    });
  }

  showAnimation() {
    this.show = true;
    sleep(1000)
      .then(() => {
        this.router.navigate(['/projects']);
      })
      .then((response) => {
        console.log(response);
      });
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.value.name == '' || contactForm.value.name == ' ') {
      alert('Please write your name');
    } else if (
      contactForm.value.email == '' ||
      contactForm.value.email == ' '
    ) {
      alert('Please write your email');
    } else {
      if (contactForm.valid) {
        const email = contactForm.value;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http
          .post(
            'https://formspree.io/f/mdoywpky',
            { name: email.name, replyto: email.email, message: email.messages },
            { headers: headers }
          )
          .subscribe((response: any) => {
            alert('Success¡ :D');
            this.refresh();
          });
      } else {
        alert('Complete all fields');
      }
    }
  }

  refresh(): void {
    window.location.reload();
  }
}
