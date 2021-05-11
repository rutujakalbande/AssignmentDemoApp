import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../enquiry';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-intrested-enquiry',
  templateUrl: './intrested-enquiry.component.html',
  styleUrls: ['./intrested-enquiry.component.css']
})
export class IntrestedEnquiryComponent implements OnInit {

  enquiryList : Enquiry[] = [];
  constructor(private authService : AuthService) { } 
  
  ngOnInit() {

    let data2: any = [];
    
    console.log('**** *** Init*****');

    this.authService.getEnquiryData()
    .subscribe((p :Enquiry[] ) =>  { 
    console.log('Data received 3:: '+p.length);
    console.log('Data received 3:: '+p.toString().length);
    this.enquiryList =p; 

      });
  }


  loadData()
  {
    console.log('**** ***>>>>>>>>>>>>>>>loadData*****');
    this.authService.getEnquiryData()
    .subscribe((p :Enquiry[] ) =>  { 
    console.log('Data received 3:: '+p.length);
    console.log('Data received 3:: '+p.toString().length);
    this.enquiryList =p; 

      });
  }

}
