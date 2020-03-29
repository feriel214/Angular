import { Component, OnInit } from '@angular/core'
import { Person } from 'src/app/models/Person'
import { RestService } from 'src/app/rest.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css'],
})
export class PersonAddComponent implements OnInit {
  data: Person

  constructor(private rest: RestService, public router: Router) {
    this.data = new Person()
  }

  ngOnInit(): void {}

  submitForm() {
    this.rest.addPerson(this.data).subscribe(response => {
      this.router.navigate(['list/person'])
    })
  }
}
