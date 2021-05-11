import { Component, OnInit, Inject,Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Enquiry } from '../enquiry';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import { DialogData } from '../dialog-data';
@Component({
  selector: 'app-enquiry-modal',
  templateUrl: './enquiry-modal.component.html',
  styleUrls: ['./enquiry-modal.component.css']
})
export class EnquiryModalComponent implements OnInit {

  
enquiryModelForm = new Enquiry('','','','','','','','','');

popUpData : DialogData;
 
  ngOnInit() {
  }

  constructor(private authService : AuthService,private router : Router,
    public dialogRef: MatDialogRef<EnquiryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
    public dialog: MatDialog,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEnquiry()
  {
     

    this.authService.addEnquiry(this.enquiryModelForm).subscribe( (response) => {
      console.log(' Demo  Added:: '+ response);
      this.dialogRef.close(); 

      const dialogRef = this.dialog.open(ThankYouComponent, {
        width: '350',
        data: {heading: "Success", message: "We will contact you soon. Thank You!"}
      }); 


       //this.router.navigate(['/learnDemo']);
    });
  }

 


}
