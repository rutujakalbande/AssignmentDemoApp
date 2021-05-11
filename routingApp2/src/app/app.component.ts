import { Component,OnInit } from '@angular/core'; 
import { MainDataService } from './main-data.service';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material';
import { EnquiryModalComponent } from './enquiry-modal/enquiry-modal.component';
import { reduce } from 'rxjs/operators';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [MainDataService]
})
export class AppComponent implements OnInit {
  title = 'routingApp2';
  
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  startDate = new Date(1990, 0, 1);

  constructor( private mainService : MainDataService, private http : HttpClient,private routes: RouterModule, 
    private authService : AuthService,
    public dialog: MatDialog)
  {

  }

  ngOnInit()
  {
    console.log('Before call from app component..');
    let data1 : Config[]=[];
/*
    
  setTimeout ( () =>{    this.openDialog();
   } , 5000); */

}

  openDialog(): void {
    console.log('openDialog...........>');
    const dialogRef = this.dialog.open(EnquiryModalComponent, {
      width: '750px',
      data: 'Kiran.....'
    }); 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    }); 
}
}
