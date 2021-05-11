import { Component, OnInit } from '@angular/core';
import { Cources } from '../cources';

@Component({
  selector: 'app-learn-cources',
  templateUrl: './learn-cources.component.html',
  styleUrls: ['./learn-cources.component.css']
})
export class LearnCourcesComponent implements OnInit {

  allCources : any = [ 
        new Cources('/assets/trainingImages/set4/DataScienceAnalyst.png','Data Science','Online','32 hours','Experience Faculty','Pune','1-Jun-2020',10000,10000),
        new Cources('/assets/trainingImages/set4/Java.jpg','Java+Spring','ClassRoom','32 hours','Experience Faculty','Pune','1-Jun-2020',10000,10000),
        
        new Cources('/assets/trainingImages/set4/coreJava.png','Core Java','Online','32 hours','Experience Faculty','Pune','1-Jun-2020',10000,10000),
        new Cources('/assets/trainingImages/set4/redHat.png','Red Hat','ClassRoom','32 hours','Experience Faculty','Pune','1-Jun-2020',10000,10000),
 
        new Cources('/assets/trainingImages/set4/Devops.png','Devops','Online','32 hours','Experience Faculty','Pune','1-Jun-2020',10000,10000),
        new Cources('/assets/trainingImages/set4/amazon.jpg','Amazon Web Services','Online','32 hours','Experience Faculty','Pune','1-Jun-2020',10000,10000),
        
        new Cources('/assets/trainingImages/set4/Linux.jpg','Linux','ClassRoom','32 hours','Experience Faculty','Pune','1-Jun-2020',10000,10000),
        new Cources('/assets/trainingImages/set4/Angular.jpg','Angular','Online','32 hours','Experience Faculty','Pune','1-Jun-2020',10000,10000),
 
      ];

      searchCource : String;

  constructor() { }

  ngOnInit() {
  }

}
