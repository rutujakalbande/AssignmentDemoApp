import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Enquiry } from '../enquiry';
import { ContactIntrestedEnquiryComponent } from '../contact-intrested-enquiry/contact-intrested-enquiry.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intrested-enquiry-child',
  templateUrl: './intrested-enquiry-child.component.html',
  styleUrls: ['./intrested-enquiry-child.component.css']
})
export class IntrestedEnquiryChildComponent implements OnInit {

  @Input() enquiryData : Enquiry;
  @Output() notifyParent = new EventEmitter();

  constructor(public dialog: MatDialog,private router : Router) { }

  ngOnInit() {
  }


  contactNow(): void {
    console.log('openDialog...........>');
    const dialogRef = this.dialog.open(ContactIntrestedEnquiryComponent, {
      width: '750px',
      data: this.enquiryData
    }); 

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.notifyParent.emit();
    });
}

}
