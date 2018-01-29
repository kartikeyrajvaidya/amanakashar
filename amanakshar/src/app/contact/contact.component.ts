import { EmailService } from './../email/email.service';
import { EmailModel } from './../email/email.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }
  emailModel: EmailModel;
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.emailModel  = {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message
    };
    form.reset();
    this.emailService.postMail(this.emailModel)
    .subscribe(
      (value) => {
        alert('Message sent succesfully');
      },
      (err) => console.log(err)
    );
  }

}
