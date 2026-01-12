import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  show: boolean = true;
  router: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.show = true;

    setTimeout(() => (this.show = false), 1000);
  }

  showAnimation() {
    this.show = true;

    setTimeout(() => this.router.navigate(['/projects']), 1000);
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.value.name == '' || contactForm.value.name == ' ') {
      alert('Please write your name');
    } else if (contactForm.value.email == '' || contactForm.value.email == ' ') {
      alert('Please write your email');
    } else {
      if (contactForm.valid) {
        const email = contactForm.value;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post('https://formspree.io/f/mdoywpky', { name: email.name, replyto: email.email, message: email.messages }, { headers: headers }).subscribe((response: any) => {
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
