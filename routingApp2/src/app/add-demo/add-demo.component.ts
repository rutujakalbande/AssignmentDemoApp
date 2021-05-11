import { Component, OnInit } from '@angular/core';
import { Demo } from '../demo';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.css']
})
export class AddDemoComponent implements OnInit {
  demoModelForm = new Demo('','','','','','','');

  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit() {
  }

  addDemo()
  {
    this.authService.addDemo(this.demoModelForm).subscribe( (response) => {
      console.log(' Demo  Added:: '+ response);
       this.router.navigate(['/learnDemo']);
    });
  }

}
