import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ReviewService} from "../../services/review.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  showReviewForm: boolean = false;
  reviews: any[] = [];
  username = sessionStorage.getItem("app.username");

  constructor(private reviewService: ReviewService) {
  }
  @ViewChild('reviewContainer') reviewContainer!: ElementRef;
  ngOnInit(): void {
    this.reviewService.findAllReviews().subscribe((response) => {
        this.reviews = response;
    }, error => {
      console.log(error);
    });
  }
openReviewForm() {
    this.showReviewForm = true;
  }

  closeReviewForm() {
    this.showReviewForm = false;
  }

  submitReview(reviewData: any) {
    this.reviewService.createReview(reviewData).subscribe((response) => {
      this.reviews.push(response);
    }, error => {
      console.log(error);
    });
    this.closeReviewForm();
  }


  deleteReview(review: any) {
    if(review.id) {
      this.reviewService.deleteReview(review.id).subscribe((response) => {
       this.reviews = this.reviews.filter( obj => { return obj != review } );
      }, error => {
        console.log(error);
      })
    }
  }
scrollCarousel(direction: 'prev' | 'next') {
  console.log(this.username);
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
