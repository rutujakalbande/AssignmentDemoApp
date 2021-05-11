import { Component, OnInit } from '@angular/core';
import { Batch } from '../batch';

@Component({
  selector: 'app-learn-batch-schedule',
  templateUrl: './learn-batch-schedule.component.html',
  styleUrls: ['./learn-batch-schedule.component.css']
})
export class LearnBatchScheduleComponent implements OnInit {

  batchData : any = [
    new Batch('/assets/trainingImages/set5/advance_spring_demo.png',''),
    new Batch('/assets/trainingImages/set5/android_demo.png',''),
    new Batch('/assets/trainingImages/set5/angular_demo.png',''),
    new Batch('/assets/trainingImages/set5/aws_demo.png',''),

    new Batch('/assets/trainingImages/set5/fullstack_demo.png',''),
    new Batch('/assets/trainingImages/set5/gcp_demo.png',''),
    new Batch('/assets/trainingImages/set5/javascript_demo.png',''),
    new Batch('/assets/trainingImages/set5/python_demo.png',''),
  ];


  constructor() { }

  ngOnInit() {
  }

}
