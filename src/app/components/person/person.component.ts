import { Person } from 'src/app/models/Person'
import { RestService } from 'src/app/rest.service'
import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  personsData: any
  subscription: Subscription
  taille: number
  constructor(public rest: RestService) {
    this.getAllPersons()
    this.subscription = this.rest.getMessage().subscribe(personBody => {
      if (personBody) {
        this.taille++
        personBody.id = this.taille
        console.log('personBody', personBody)
        this.personsData.push(personBody)
      }
    })
  }

  ngOnInit(): void {}
  //Get list of all persons
  getAllPersons() {
    this.rest.getListPerson().subscribe(response => {
      console.log(response)
      this.personsData = response
      var obj = JSON.parse(JSON.stringify(response))
      this.taille = parseInt(obj[obj.length - 1].id)
    })
  }

  delete(pers, index) {
    //Delete item in Student data
    this.rest.deletePerson(pers.id)
    this.personsData.splice(index, 1)
  }

  getPersonInfos(pers: Person) {
    this.rest.formData = pers
    this.rest.Disable = false
  }
}
