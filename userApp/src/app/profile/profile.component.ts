import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { StuentProfile } from '../stuent-profile';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  stData : StuentProfile;

  @Output() notifyParent = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  callRegistrationPopUp()
   {
          console.log('Parent page called..');
          console.log('openDialog...........>');
          this.stData.loadOldFlag = true;
          const dialogRef = this.dialog.open(RegistrationComponent, {
                width: '750px',
                data: this.stData
              });  
            dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed', result); 
                    if(result.data.firstName == null ||result.data.firstName == "" )
                    {
                      console.log ('Nulll'); 
                    }
                    else
                    {
                      console.log (result.data.firstName); 
                      this.stData = result.data;
                    }  
              }); 
      console.log('Parent page called End..');
  }
}
