import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  showReviewForm: boolean = false;
  reviews: any[] = [];

  openReviewForm() {
    this.showReviewForm = true;
  }

  closeReviewForm() {
    this.showReviewForm = false;
  }

  submitReview(reviewData: any) {
    // Add the submitted review to the reviews array
    this.reviews.push(reviewData);
    this.closeReviewForm();
  }

}
