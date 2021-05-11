import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { GmailComponent } from './gmail/gmail.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { TrainerComponent } from './trainer/trainer.component';
import { MyDataComponent } from './my-data/my-data.component';
import { CustomerComponent } from './customer/customer.component';
import { LearnAboutComponent } from './learn-about/learn-about.component';
import { LearnCourcesComponent } from './learn-cources/learn-cources.component';
import { LearnBatchScheduleComponent } from './learn-batch-schedule/learn-batch-schedule.component';
import { LearnOnlineComponent } from './learn-online/learn-online.component';
import { LearnCertificationComponent } from './learn-certification/learn-certification.component';
import { LearnJobOpeningComponent } from './learn-job-opening/learn-job-opening.component';
import { LearnContactUsComponent } from './learn-contact-us/learn-contact-us.component';
import { LearnHomeComponent } from './learn-home/learn-home.component';
import { DemoParentComponent } from './demo-parent/demo-parent.component';
import { AddDemoComponent } from './add-demo/add-demo.component';
import { LearnAdminComponent } from './learn-admin/learn-admin.component';
import { ManageDemoComponent } from './manage-demo/manage-demo.component';
import { IntrestedEnquiryComponent } from './intrested-enquiry/intrested-enquiry.component';
import { StudentImageComponent } from './student-image/student-image.component';
import { StudentAllDataComponent } from './student-all-data/student-all-data.component';

 

const routes: Routes = [

  { path : '', redirectTo :'/learnHome' , pathMatch: 'full' },
  { path : 'home', component : MyHomeComponent },
  { path : 'learnHome', component : LearnHomeComponent },
  { path : 'learnDemo', component : DemoParentComponent },
 
  { path : 'learnAbout', component : LearnAboutComponent },
  { path : 'learnCources', component : LearnCourcesComponent },
  { path : 'learnBatch', component : LearnBatchScheduleComponent },
  { path : 'learnOnline', component : LearnOnlineComponent },
  { path : 'learnCertification', component : LearnCertificationComponent },
  { path : 'learnJobOpening', component : LearnJobOpeningComponent },
  { path : 'learnContactUs', component : LearnContactUsComponent },
  { path : 'student', component : StudentImageComponent },
  { path : 'allStudent', component : StudentAllDataComponent },

  

///

{ path : 'learnAdmin', component : LearnAdminComponent,
children : [
 
  { path : 'addDemo', component : AddDemoComponent}, 
  { path : 'manageDemo', component : ManageDemoComponent}, 
  { path : 'manageEnq', component : IntrestedEnquiryComponent}, 
  { path : '**', redirectTo :'addDemo' , pathMatch: 'full' },

]

},
///



  { path : 'customer', component : CustomerComponent },
  { path : 'outputParent', component :  NotFoundComponent},

  { path : 'gmail', component : GmailComponent },
  { path : 'admin', component : AdminComponent  },
  { path : 'trainer', component : TrainerComponent },
  { path : 'myData', component : MyDataComponent },
  { path : 'login', component : LoginComponent },
  { path : 'signUp', component : SignupComponent },
  { path : '**', component : NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [AuthGuard]
})
export class AppRoutingModule { }
