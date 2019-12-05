import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from '../service/feedback.service';
import { Feedback } from '../modules/navigation/models/feedback';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  feedbackform: FormGroup;
  constructor(private feedbackService:FeedbackService,private _formBuilder: FormBuilder) { }
  
  ngOnInit() {
   
    this.feedbackform= this._formBuilder.group({
      name: ['', Validators.required],
      msg: ['', Validators.required],
      experience: ['', Validators.required],

    });
  }
  
  saveFeedback(){
    console.log(this.feedbackform.value);
    let name= this.feedbackform.controls['name'].value;
    let msg= this.feedbackform.controls['msg'].value;
    let experience = this.feedbackform.controls['experience'].value;
    console.log("hell2"+name);
    console.log("hell3"+experience);
    let feedback= new Feedback(name, msg, experience);
    console.log(feedback);
    this.feedbackService.createfeedback(feedback).subscribe(data => console.log(data) 
    ,  error => console.log(error))
  }


}
