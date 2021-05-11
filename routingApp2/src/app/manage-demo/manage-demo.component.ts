import { Component, OnInit } from '@angular/core';
import { Demo } from '../demo';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-demo',
  templateUrl: './manage-demo.component.html',
  styleUrls: ['./manage-demo.component.css']
})
export class ManageDemoComponent implements OnInit {

  demoList : Demo[] = []; 

  demoModelForm : Demo;
  showSelectedRecordFlag : boolean = false;


  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit() {
    let data2: any = [];
    
    console.log('**** *** Init*****');

    this.authService.getDemoData()
    .subscribe((p :Demo[] ) =>  {

    console.log('Data received 3:: '+p.length);
    console.log('Data received 3:: '+p.toString().length);
    this.demoList =p; 

});
  }

showRecord(d : Demo)
{
  this.demoModelForm = d;
  this.showSelectedRecordFlag = true;
}

updateDemo()
{
  this.authService.updateDemo(this.demoModelForm);
  this.showSelectedRecordFlag = false;
}

}