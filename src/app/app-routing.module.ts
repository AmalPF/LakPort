import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { TicketStatusComponent } from './ticket-status/ticket-status.component';
import { SignupComponent } from './signup/signup.component';
import { DatePipe } from '@angular/common';
import { FreightChargeComponent } from './freight-charge/freight-charge.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ShipScheduleComponent } from './ship-schedule/ship-schedule.component';
import { SeatAvailabilityComponent } from './seat-availability/seat-availability.component';
import { FareTableComponent } from './fare-table/fare-table.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PaymentComponent } from './payment/payment.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'ticket-status', component:TicketStatusComponent},
  { path: 'contact', component:ContactComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'freight-charge', component:FreightChargeComponent },
  { path: 'ticket-booking', component:TicketBookingComponent },
  { path: 'ship-schedule', component:ShipScheduleComponent },
  { path: 'seat-availability', component:SeatAvailabilityComponent },
  { path: 'fare-table', component:FareTableComponent },
  { path: 'terms-conditions', component:TermsConditionsComponent },
  { path: 'privacy-policy', component:PrivacyPolicyComponent },
  { path: 'aboutus', component:AboutusComponent },
  { path: 'payment', component:PaymentComponent },
  { path: 'refund-policy', component:RefundPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DatePipe]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  TicketStatusComponent,
  ContactComponent,
  LoginComponent,
  SignupComponent,
  FreightChargeComponent,
  TicketBookingComponent,
  ShipScheduleComponent,
  SeatAvailabilityComponent,
  FareTableComponent,
  TermsConditionsComponent,
  PrivacyPolicyComponent,
  AboutusComponent,
  PaymentComponent,
  RefundPolicyComponent
]
