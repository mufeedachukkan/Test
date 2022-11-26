import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  address:any
  dob:any
  fname:any
  lname:any
  gender:any
  role:any
  phone:any
  constructor() { }

  ngOnInit(): void {
    this.address=JSON.parse(localStorage.getItem('address')||'')
    this.dob=JSON.parse(localStorage.getItem('dob')||'')
    this.fname=JSON.parse(localStorage.getItem('fname')||'')
    this.lname=JSON.parse(localStorage.getItem('lname')||'')
    this.gender=JSON.parse(localStorage.getItem('gender')||'')
    this.role=JSON.parse(localStorage.getItem('role')||'')
    this.phone=JSON.parse(localStorage.getItem('phone')||'')

  }

}
