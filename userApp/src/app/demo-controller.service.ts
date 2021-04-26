import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { StuentProfile } from './stuent-profile';

@Injectable({
  providedIn: 'root'
})
export class DemoControllerService {

constructor(private http: HttpClient, private routr :Router) { }
addUserData( User : StuentProfile)
  {
    const postData = new FormData();
   // postData.append("_id", User._id);
    postData.append("firstName", User.firstName);
    postData.append("lastName", User.lastName);
    postData.append("email", User.email);
    postData.append("mobileNumber", User.mobileNumber);
    postData.append("state", User.state);

    postData.append("country", User.country);
    postData.append("interest", User.interest);
    postData.append("age", User.age);
    postData.append("loadOldFlag", User.loadOldFlag);
    postData.append("address", User.address);
    let body:any =  User; 
    let d = new Date();
    let hostUrl = 'http://localhost:3000/apps/signupImage?v='+d.toLocaleTimeString();
     this.http.post(hostUrl, postData).subscribe(responseData => {
      console.log("Response ...got")
      this.routr.navigate(['/thankyou']);
    }
    );
  
  }

 
  getData()
  {
     console.log('--getStudentData..');
     let d = new Date(); 
     let url = 'http://localhost:3000/apps/getStudentSignupImage?v='+d.toLocaleTimeString();
     return  this.http.get(url);
  }


  findDataByName(query : String)
  {
    console.log('--findDataByName..' +query);
    let url = 'http://localhost:3000/apps/getStudentSignupImage/'+query;
    console.log('--findDataByName..' +url);
    console.log('--findDataByName..');
    let d = new Date(); 
    url= url+'?v='+d.toLocaleTimeString();
    console.log('--findDataByName..' +url);
    //let url = 'http://localhost:3500/apps/getStudentSignupImage?v='+d.toLocaleTimeString();
    return  this.http.get(url);
  }

  
  }

