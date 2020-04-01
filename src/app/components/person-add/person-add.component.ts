import { Component, OnInit } from '@angular/core'
import { Person } from 'src/app/models/Person'
import { RestService } from 'src/app/rest.service'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css'],
})
export class PersonAddComponent implements OnInit {
  constructor(public rest: RestService, public router: Router) {}

  ngOnInit(): void {
    this.rest.ResetForm()
  }
  //Add Or Update Person
  onSubmit(form: NgForm) {
    if (this.rest.formData.id == 0) {
      this.submitForm(form)
      this.rest.Disable = true
    } else this.update(form)
  } 
  //Add Prson
  submitForm(form: NgForm) {
    this.rest.addPerson()

  }
  //Update 
  update(form: NgForm) {
    console.log("this. is our edit");
    this.rest.editPerson().subscribe(
      res => {
        console.log(res)
        console.log("hiii")
       // 
        this.rest.Disable = true
        this.rest.formData=res
        this.rest.ResetForm(form)
      },
      err => {
        console.log(err)
      },
    )
 
  }
 
  // Cancel the ADD or the update
  Cancel() {
    this.rest.formData = {
      id: 0,
      lastname: ' ',
      age: null,
      number: null,
      country: ' ',
      completed: false,
    }
    this.rest.Disable = true
  }
}
