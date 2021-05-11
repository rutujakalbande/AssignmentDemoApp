import { Component, OnInit, Input } from '@angular/core';
import { Cources } from '../cources';

@Component({
  selector: 'app-learn-cources-child',
  templateUrl: './learn-cources-child.component.html',
  styleUrls: ['./learn-cources-child.component.css']
})
export class LearnCourcesChildComponent implements OnInit {

  @Input() courceDetailData : Cources;

  discount : number;


  constructor() { }

  ngOnInit() {
  }

  calculateDiscount()
  {
    console.log(' Inside  calculateDiscount() function..start..  ' );
    console.log(' Discount = '+this.discount );
    console.log(' Fees before discount  = '+this.courceDetailData.courceFeesAfterDiscount );
    let amount = (this.courceDetailData.courceFees*this.discount )/100;
    this.courceDetailData.courceFeesAfterDiscount = this.courceDetailData.courceFees - amount;
    console.log(' Fees before discount  = '+this.courceDetailData.courceFeesAfterDiscount );
  }

}
