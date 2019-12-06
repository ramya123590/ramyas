import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquireComponent } from './enquire/enquire.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HospitalNagawaraComponent } from './hospital-nagawara/hospital-nagawara.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppoinmentFrontComponent } from './appoinment-front/appoinment-front.component';
import { DatetimepickComponent } from './datetimepick/datetimepick.component';
import { OtpformComponent } from './otpform/otpform.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConformpasswordformComponent } from './conformpasswordform/conformpasswordform.component';
import { UserIdComponent } from './user-id/user-id.component';
import { DoctorslotComponent } from './doctorslot/doctorslot.component';
import { PaymentComponent } from './payment/payment.component';
import { Navigationbar2Component } from './navigationbar2/navigationbar2.component';
import { AuthGuard } from './auths/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { UserdetailupdateComponent } from './userdetailupdate/userdetailupdate.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes = [

  {
    path:'Enquire',
    component:EnquireComponent
  },
  {
    path:'',
    component:HomeComponent,
    data: {  show: false }
  },
  {
    path:'login',
    component:LoginComponent,
    data: {  showHeader: false ,shownav:false} 
  },
  {
    path:'Hospital',
    component:HospitalDetailsComponent,
    data: {  show: false } 
  },
  {
    
    path:'dashboard',
    component:DashboardComponent,
    data: {  showHeader: false,show:false }  , canActivate:[AuthGuard]
  },
  {
    path:'NagawaraHospital',
    component:HospitalNagawaraComponent,
    data: {  show: false }
  },
  {
    path:'contactform',
    component:ContactFormComponent ,
    data: {  show: false }
  },
  {
    path:'appoinment',
    component:AppoinmentFrontComponent,
    data: {  show: false, showHeader:false} , canActivate:[AuthGuard]
  },
  {
    path:'dateandtime',
    component:DatetimepickComponent,
    data: { showHeader: false ,show:false  } , canActivate:[AuthGuard]
  },
  {
    path:'otpform',
    component:OtpformComponent,
    data: { showHeader: false ,shownav:false}
  },
  {
    path:'register',
    component:RegistrationComponent,
    data: { showHeader: false ,shownav:false }
  },
  {
    path:'confirmform',
    component:ConformpasswordformComponent,
    data: {  showHeader: false ,shownav:false}
  },
  {
    path:'userId',
    component:UserIdComponent,
    data: {  showHeader: false ,shownav:false}
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent,
    data: {  showHeader: false ,shownav:false} 
  },
  {
    path:'resetPassword',
    component:ResetpasswordComponent,
    data: {  showHeader: false ,shownav:false} 
  },
  {
    path:'doctorslot',
    component:DoctorslotComponent,
    data: {  showHeader: false ,show:false } , canActivate:[AuthGuard]
  },
  {
    path:'payment',
    component:PaymentComponent,
    data: {  showHeader: false ,show:false } , canActivate:[AuthGuard]
  },
  {
    path:'shownav',
    component:Navigationbar2Component,
    data: {  showHeader: false ,show:false,showFooter:false }
  },
  {
    path:'profile',
    component:ProfileComponent,
    data: {  showHeader: false ,show:false }, canActivate:[AuthGuard]
  },
  {
    path:'appointmentdetails',
    component:AppointmentDetailsComponent,
    data: {  showHeader: false ,show:false }, canActivate:[AuthGuard]
  },
  {
    path:'updatedetails',
    component:UserdetailupdateComponent,
    data: {  showHeader: false ,show:false }, canActivate:[AuthGuard]
  },
  
  {
    path:'home',
    canActivate: [AuthGuard],
    
    loadChildren: 'src/app/modules/navigation/navigation.module#NavigationModule',
    data: { showHeader: false ,show:false,shownav:false, showFooter:false },
  },
  // {
  //   path: '',
  //   loadChildren: 'src/app/modules/auth/auth.module#AuthModule'
  // },
  // {
  //   path:'**',
  //   component: PageNotFoundComponentComponent
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
