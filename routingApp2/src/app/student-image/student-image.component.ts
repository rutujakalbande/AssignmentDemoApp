import { Component, OnInit } from '@angular/core';
import { StudentControllerService } from '../student-controller.service';
import { StudentProfile } from '../student-profile';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-image',
  templateUrl: './student-image.component.html',
  styleUrls: ['./student-image.component.css']
})
export class StudentImageComponent implements OnInit {

  signupModelForm = new StudentProfile('','','','','','','','','');

  userType : any = ['Admin','Student','Trainer'];
  imagePreview : any;
  imagePreviewFlag =false; 
  UploadImage : File;

  constructor(private routr : Router,private http : HttpClient, private studentControllerService : StudentControllerService) { }

  ngOnInit() {
  }

  addUser()
  {
    this.studentControllerService.addUserData(this.signupModelForm,this.UploadImage); 
    
    

 
  }
  //url; //Angular 8
	url: any; //Angular 11, for stricter type
	msg = "";
	
	selectFile(event) {

    this.url="";
    this.msg="";
    if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
			
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
      this.imagePreview = reader.result;
      this.imagePreviewFlag = true;
      this.UploadImage = event.target.files[0];
		}
    reader.readAsDataURL(event.target.files[0]);
	

 
		
	}
	

}
