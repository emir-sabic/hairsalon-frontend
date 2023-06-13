import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  showReviewForm: boolean = false;
  reviews: any[] = [];

  @ViewChild('reviewContainer') reviewContainer!: ElementRef;

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

  scrollCarousel(direction: 'prev' | 'next') {
    const container = this.reviewContainer.nativeElement;
    const scrollAmount = container.offsetWidth + 20; // Scroll by the width of the container plus additional spacing

    if (direction === 'prev') {
      container.scroll({
        left: container.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    } else if (direction === 'next') {
      container.scroll({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
