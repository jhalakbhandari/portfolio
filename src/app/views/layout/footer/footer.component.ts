import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-footer',
  // standalone: true,
  // imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    message: '',
  };
  loading = false;
  sendEmail() {
    if (this.loading) return;
    this.loading = true;

    const serviceID = environment.serviceId;
    const templateID = environment.templateId;
    const publicKey = environment.emailJsPublicKey;

    const templateParams = {
      user_name: this.formData.name,
      user_email: this.formData.email,
      message: this.formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Message sent successfully!');
        this.formData = { name: '', email: '', message: '' };
        this.loading = false;
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send message: ' + JSON.stringify(error));
      });
  }
  ngOnInit(): void {}
}
