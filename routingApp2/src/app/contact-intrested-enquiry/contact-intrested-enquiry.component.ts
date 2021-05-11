import { Component, OnInit,Inject,Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Enquiry } from '../enquiry';
@Component({
  selector: 'app-contact-intrested-enquiry',
  templateUrl: './contact-intrested-enquiry.component.html',
  styleUrls: ['./contact-intrested-enquiry.component.css']
})
export class ContactIntrestedEnquiryComponent implements OnInit {

  enquiryData : Enquiry;

  constructor(private authService : AuthService,private router : Router,
    public dialogRef: MatDialogRef<ContactIntrestedEnquiryComponent>,
    @Inject(MAT_DIALOG_DATA) public enqDataRecevied: Enquiry) { 
      this.enquiryData = enqDataRecevied;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveResponse()
  { 
    this.authService.updateEnquiry(this.enquiryData).subscribe( (response) => {
      console.log(' Demo  Added:: '+ response);
      this.dialogRef.close();
      this.router.navigate(['/learnAdmin/manageEnq']);
    });
  }

}
