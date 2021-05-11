import { Component, OnInit } from '@angular/core';
import { StudentControllerService } from '../student-controller.service';
import { StudentProfile } from '../student-profile';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-all-data',
  templateUrl: './student-all-data.component.html',
  styleUrls: ['./student-all-data.component.css']
})
export class StudentAllDataComponent implements OnInit {
  uDataList : StudentProfile[] = [];
  returnUrl : String = '';
loggedInUser : StudentProfile;
  constructor(private routr : Router,private http : HttpClient, private studentControllerService : StudentControllerService) { }

  ngOnInit() {
      let data2: any = [];
    
      console.log('**** *** Init*****');

      this.studentControllerService.getStudentData().subscribe((p :StudentProfile[] ) =>  
                      { 
                          console.log('Data received 3:: '+p.length);
                          console.log('Data received 3:: '+p.toString().length);
                          this.uDataList =p; 

                          for(var i = 0 ; i <this.uDataList.length;i++)
                          {
                            console.log("image Path :: "+ this.uDataList[i].image);
                          }
                        });


                       
    }

}
