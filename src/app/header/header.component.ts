import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  list_close() {
    console.log("Function is working!");
  }

  close_dropdown() {
    document.getElementById("drop-down").style.display = "none";
    document.getElementById("dropdown:hover dropdown-content").style.display = "block";
  }


}
