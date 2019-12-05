import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AdminCreateComponent } from './dummy/admin-create/admin-create.component';
import { AdminListComponent } from './dummy/admin-list/admin-list.component';
import { FormsModule} from '@angular/forms';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SpecialistComponent } from './components/specialist/specialist.component';
import { AuthService } from '../auth/service/auth.service';
import { AuthGuard } from '../../auths/auth.guard';
import { EnquiryreplayComponent } from './components/enquiryreplay/enquiryreplay.component';

@NgModule({
  declarations: [NavComponent,
    DoctorComponent, AdddoctorComponent, 
    AppointmentComponent,  
     AdminCreateComponent,  AdminListComponent, EnquiryComponent, FeedbackComponent, SpecialistComponent, EnquiryreplayComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    LayoutModule,
    DragDropModule,
  ReactiveFormsModule,
   MaterialModule ,
   FormsModule
  ],
  providers: [AuthService ,AuthGuard],

})
export class NavigationModule { }
