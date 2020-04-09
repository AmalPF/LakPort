import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public place_change = true;
  public optional_btn = false;
  constructor() { }

  ngOnInit() {
  }

  change_place() {
    this.place_change = !(this.place_change);
    console.log("Place change!");
    console.log(this.place_change);
  }

  optional_content() {
    this.optional_btn = !(this.optional_btn);
    console.log("Optional Button clicked!");
    console.log(this.optional_btn);
  }

}
