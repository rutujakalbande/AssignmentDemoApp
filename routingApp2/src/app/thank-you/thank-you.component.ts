import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DialogData } from '../dialog-data';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {


  constructor(private authService : AuthService,private router : Router,
    public dialogRef: MatDialogRef<ThankYouComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
     
    ) {

    
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }




}
