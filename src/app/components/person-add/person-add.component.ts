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

  constructor(private rest: RestService,public router: Router ) {}
    
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
  //Update Person 
  update(form: NgForm) {
    this.rest.editPerson().subscribe(
      res => {
        this.rest.ResetForm(form)
        this.rest.Disable = true
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
