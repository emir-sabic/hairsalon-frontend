import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.css']
})
export class ReviewPopupComponent {
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  reviewData: any = {
    name: '',
    email: '',
    review: ''
  };

  onSubmit() {
    this.submit.emit(this.reviewData);
    this.reviewData = {
      name: '',
      email: '',
      review: ''
    };
  }

  onClose() {
    this.close.emit();
  }
}
