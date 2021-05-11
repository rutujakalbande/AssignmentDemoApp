import { Component, OnInit,Input } from '@angular/core';
import { Batch } from '../batch';

@Component({
  selector: 'app-upcoming-batch',
  templateUrl: './upcoming-batch.component.html',
  styleUrls: ['./upcoming-batch.component.css']
})
export class UpcomingBatchComponent implements OnInit {

  @Input() batchAllData : Batch;

  constructor() { }

  ngOnInit() {
  }

}
