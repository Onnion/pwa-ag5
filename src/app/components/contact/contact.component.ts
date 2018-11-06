import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})

export class ContactComponent implements OnInit {

  public form: FormGroup;

  public status_email = {
    'send': null,
    'sending': null,
    'error_send': null,
    'pre_send': true
  };


  constructor(
    private contact: ContactService,
    private fb: FormBuilder
  ) { }


  private initFormControls(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }


  public getBtnLabel(): string {
    let result = 'Enviar';

    if (this.status_email.sending) {
      result = 'Enviando...';

    } else if (this.status_email.error_send) {
      result = 'Enviar';

    } else if (this.status_email.send) {
      result = 'Enviado';

    }

    return result;
  }


  private createObject(): any {

  }


  sendMail() {

    if (this.form.valid) {

      this.status_email.pre_send = false;
      this.status_email.sending = true;

      this.contact.send(this.createObject()).subscribe(
        (contact) => {
          this.status_email.sending = false;
          this.status_email.send = true;

        },
        (error) => {
          console.log(error);
        });

    } else {

      this.status_email.pre_send   = false;
      this.status_email.error_send = true;

      setTimeout(() => {

        this.status_email.pre_send = true;
        this.status_email.error_send = false;

      }, 1000);
    }



  }


  ngOnInit() {

    this.initFormControls();
   }


}
