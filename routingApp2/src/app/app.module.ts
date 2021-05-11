import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { NotFoundComponent } from './not-found/not-found.component'; 

import { GmailComponent } from './gmail/gmail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatrialModule } from './matrial/matrial.module';
import { MainDataService } from './main-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth-interceptor';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { TrainerComponent } from './trainer/trainer.component';
import { MyDataComponent } from './my-data/my-data.component';
import { ErrorComponent } from './error/error.component';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule
} from "@angular/material";
import { ErrorInterceptor } from './error-interceptor';
import { AddNoteComponent } from './add-note/add-note.component';
import { CustomerComponent } from './customer/customer.component';
import { OptputParentComponent } from './optput-parent/optput-parent.component';
import { OptputChildComponent } from './optput-child/optput-child.component';
import { RedbusComponent } from './redbus/redbus.component'; 
import { LearnAboutComponent } from './learn-about/learn-about.component';
import { LearnCourcesComponent } from './learn-cources/learn-cources.component';
import { LearnBatchScheduleComponent } from './learn-batch-schedule/learn-batch-schedule.component';
import { LearnOnlineComponent } from './learn-online/learn-online.component';
import { LearnCertificationComponent } from './learn-certification/learn-certification.component';
import { LearnJobOpeningComponent } from './learn-job-opening/learn-job-opening.component';
import { LearnContactUsComponent } from './learn-contact-us/learn-contact-us.component';
import { LearnHomeComponent } from './learn-home/learn-home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderModule } from 'angular-image-slider';
import { EnquiryModalComponent } from './enquiry-modal/enquiry-modal.component';
import { LearnCourcesChildComponent } from './learn-cources-child/learn-cources-child.component';
import { SearchCourcePipe } from './search-cource.pipe';
import { UpcomingBatchComponent } from './upcoming-batch/upcoming-batch.component';
import { DemoParentComponent } from './demo-parent/demo-parent.component';
import { DemoChildComponent } from './demo-child/demo-child.component';
import { AddDemoComponent } from './add-demo/add-demo.component';
import { LearnAdminComponent } from './learn-admin/learn-admin.component';
import { ManageDemoComponent } from './manage-demo/manage-demo.component';
import { ManageDemoChildComponent } from './manage-demo-child/manage-demo-child.component';
import { IntrestedEnquiryComponent } from './intrested-enquiry/intrested-enquiry.component';
import { IntrestedEnquiryChildComponent } from './intrested-enquiry-child/intrested-enquiry-child.component';
import { ContactIntrestedEnquiryComponent } from './contact-intrested-enquiry/contact-intrested-enquiry.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { StudentImageComponent } from './student-image/student-image.component';
import { StudentAllDataComponent } from './student-all-data/student-all-data.component';
@NgModule({
  
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
   NgbModule,
    BrowserAnimationsModule,
    MatrialModule,
    HttpClientModule,

    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    NgImageSliderModule,
    SliderModule,

   // MatFormFieldModule,
    //MatInputModule,
  //  MatButtonModule,

  ],

  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MyHomeComponent,
    NotFoundComponent,
    GmailComponent,
    HeaderComponent,
    AdminComponent,
    TrainerComponent,
    MyDataComponent,
    ErrorComponent,
    AddNoteComponent,
    CustomerComponent,
    OptputParentComponent,
    OptputChildComponent,
    RedbusComponent,
    LearnAboutComponent,
    LearnCourcesComponent,
    LearnBatchScheduleComponent,
    LearnOnlineComponent,
    LearnCertificationComponent,
    LearnJobOpeningComponent,
    LearnContactUsComponent,
    LearnHomeComponent,
    EnquiryModalComponent,
    LearnCourcesChildComponent,
    SearchCourcePipe,
    UpcomingBatchComponent,
    DemoParentComponent,
    DemoChildComponent,
    AddDemoComponent,
    LearnAdminComponent,
    ManageDemoComponent,
    ManageDemoChildComponent,
    IntrestedEnquiryComponent,
    IntrestedEnquiryChildComponent,
    ContactIntrestedEnquiryComponent,
    ThankYouComponent,
    StudentImageComponent,
    StudentAllDataComponent
  ],
  providers: [
                {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true},
               {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                MainDataService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent,EnquiryModalComponent,ContactIntrestedEnquiryComponent,ThankYouComponent]
 
})
export class AppModule { }
