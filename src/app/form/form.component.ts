import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm=this.fb.group({
    fname:['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lname:['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    address:['', [Validators.required]],
    Dob:['', [Validators.required]],
    role:['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    phone:['', [Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],
    gender:['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  })
  
  constructor(private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    var fname = this.registerForm.value.fname
    var lname = this.registerForm.value.lname
    var address = this.registerForm.value.address
    var dateOfBirth = this.registerForm.value.Dob
    var role = this.registerForm.value.role
    var phone=this.registerForm.value.phone
    var gender=this.registerForm.value.gender
    if (this.registerForm.valid) {
     
            alert("registered successfully")
            localStorage.setItem('fname', JSON.stringify(fname))
            localStorage.setItem('lname', JSON.stringify(lname))
            localStorage.setItem('address', JSON.stringify(address))
            localStorage.setItem('dob', JSON.stringify(dateOfBirth))
            localStorage.setItem('role', JSON.stringify(role))
            localStorage.setItem('phone', JSON.stringify(phone))
            localStorage.setItem('gender', JSON.stringify(gender))

            this.router.navigateByUrl('display')
          }
          else {
            alert("Please check eneterd data ,All are manditory")
          }
       
    } 
  }

