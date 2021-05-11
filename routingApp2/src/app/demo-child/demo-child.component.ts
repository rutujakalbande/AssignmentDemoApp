import { Component, OnInit,Input } from '@angular/core';
import { Demo } from '../demo';
import { EnquiryModalComponent } from '../enquiry-modal/enquiry-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class DemoChildComponent implements OnInit {

  @Input() dList : Demo;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    console.log('openDialog...........>');
    const dialogRef = this.dialog.open(EnquiryModalComponent, {
      width: '750px',
      data: 'Kiran.....'
    }); 
}
}
