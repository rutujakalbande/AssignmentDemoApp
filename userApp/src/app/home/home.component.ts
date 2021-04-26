import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { StuentProfile } from '../stuent-profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showMainPage : boolean = true;
  studentData :any = StuentProfile;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
 

  openDialog(): void {
            console.log('openDialog...........>');
            const dialogRef = this.dialog.open(RegistrationComponent, {
              width: '750px',
              data: 'Kiran....'
            }); 

            dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            if(result.data.firstName == null ||result.data.firstName == "" )
              {
                console.log ('Nulll');
              }
            else{
                console.log (result.data.firstName);
                this.showMainPage = false;
                this.studentData = result.data;
              } 
          }); 
        }
 

}
