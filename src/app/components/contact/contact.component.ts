import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})

export class ContactComponent implements OnInit {

  public contact_form = {
    'name': null,
    'subject': null,
    'message': null,
    'email': null
  }


  public status_email = {
    'send': null,
    'sending': null,
    'error_send': null,
    'pre_send': true
  }


  constructor(private contact: ContactService) { }


  ngOnInit() { }


  sendMail() {

    if (
      this.contact_form.email && this.contact_form.name &&
      this.contact_form.message && this.contact_form.subject) {

      this.status_email.pre_send = false;
      this.status_email.sending = true;

      this.contact.send(this.contact_form)
        .subscribe(res => {

          this.status_email.sending = false;
          this.status_email.send = true;
          this.contact_form.email = null;
          this.contact_form.name = null;
          this.contact_form.subject = null;
          this.contact_form.message = null;

        });

    } else {

      this.status_email.pre_send   = false;
      this.status_email.error_send = true;

      setTimeout(() => {

        this.status_email.pre_send = true;
        this.status_email.error_send = false;

      }, 1000)
    }



  }


}
