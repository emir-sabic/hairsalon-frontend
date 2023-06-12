import { Component } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { Newsletter } from '../../models/newsletter.model'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private newsletterService: NewsletterService) {}

  newslettermodel: Newsletter = {
    email: ''
  };

  subscribeNow() {
    this.newsletterService.createNewsletter(this.newslettermodel);
  }
}
