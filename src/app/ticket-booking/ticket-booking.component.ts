import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {

  public count = [1,2,3,4,5,6];
  public passenger_count = 2;
  constructor() { }

  ngOnInit() {
  }

  add_new_passenger() {
    if(this.passenger_count<6)
      this.passenger_count++;
    console.log("New passenger added.");
  }

}
