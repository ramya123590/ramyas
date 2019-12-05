import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../../models/feedback';
import { FeedbackService } from 'src/app/service/feedback.service';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks: Observable<Feedback[]>;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.reloadData();
  };

  reloadData(){
    this.feedbacks=this.feedbackService.getfeedbackList();
    console.log(this.feedbacks);
  }

  deleteFeedback(id: number) {
    this.feedbackService.deletefeedback(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  

}
