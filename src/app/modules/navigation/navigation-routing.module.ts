import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AdminListComponent } from './dummy/admin-list/admin-list.component';
import { AdminCreateComponent } from './dummy/admin-create/admin-create.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SpecialistComponent } from './components/specialist/specialist.component';
import { AuthGuard} from '../../auths/auth.guard'
import { EnquiryreplayComponent } from './components/enquiryreplay/enquiryreplay.component';


const routes: Routes = [
  {path:''  , component:NavComponent,
  children: [

  {path:'doctor' , component:DoctorComponent , canActivate:[AuthGuard]},
  {path:'addDoctor' , component:AdddoctorComponent ,canActivate:[AuthGuard]},
  {path:'appointment' , component:AppointmentComponent , canActivate:[AuthGuard]},
  { path:'admins', component: AdminListComponent , canActivate:[AuthGuard]},
  { path:'addAdmin', component: AdminCreateComponent , canActivate:[AuthGuard] },
  {path:'enquiry' , component:EnquiryComponent , canActivate:[AuthGuard]},
  {path:'feedback' , component:FeedbackComponent , canActivate:[AuthGuard]},
  {path:'speciality' , component:SpecialistComponent , canActivate:[AuthGuard]},
  {path:'reply' , component:EnquiryreplayComponent , canActivate:[AuthGuard]}
  ] , canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
