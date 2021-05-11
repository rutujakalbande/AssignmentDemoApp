import { Component, OnInit } from '@angular/core';
import { Demo } from '../demo';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-demo-parent',
  templateUrl: './demo-parent.component.html',
  styleUrls: ['./demo-parent.component.css']
})
export class DemoParentComponent implements OnInit {

  demoList : Demo[] = []; 

  constructor(private authService : AuthService) { }

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

}
