import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
 
import { Demo } from '../demo';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-manage-demo-child',
  templateUrl: './manage-demo-child.component.html',
  styleUrls: ['./manage-demo-child.component.css']
})
export class ManageDemoChildComponent implements OnInit {

@Input() dList : Demo;

@Output() notifyParent = new EventEmitter();


  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  update()
  {
    this.notifyParent.emit(this.dList); 
  }

  delete()
  {
    this.authService.deleteDemo(this.dList);

  }

}
