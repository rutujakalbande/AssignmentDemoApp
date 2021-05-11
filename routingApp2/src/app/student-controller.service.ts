import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentProfile } from './student-profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentControllerService {

  constructor(private http: HttpClient, private routr :Router) { }

  getStudentData()
  {
     console.log('--getStudentData..');
     let d = new Date(); 
     let url = 'http://localhost:3000/apps/getStudentSignupImage?v='+d.toLocaleTimeString();
     return  this.http.get(url);
  }

  addUserData( User : StudentProfile, image :File)
  {
    console.log(' StudentControllerService :: addUserData ' +image.name + " "+ image.size ); 

    const postData = new FormData();
    postData.append("_id", User._id);
    postData.append("userName", User.userName);
    postData.append("loginName", User.loginName);
    postData.append("password", User.password);
    postData.append("email", User.email);
    postData.append("userType", User.userType);

    postData.append("contactNumber", User.contactNumber);
    postData.append("address", User.address);
    postData.append("image", image, image.name);
    let body:any =  User; 
    let d = new Date();
    let hostUrl = 'http://localhost:3000/apps/signupImage?v='+d.toLocaleTimeString();
     this.http.post(hostUrl, postData).subscribe(responseData => {
      console.log("Response ...got")
      this.routr.navigate(['/allStudent']);
    }
    );
  
  }
}
