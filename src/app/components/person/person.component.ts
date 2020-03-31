import { Person } from 'src/app/models/Person'
import { RestService } from 'src/app/rest.service'
import { Component,OnInit } from '@angular/core'
import { Observable } from "rxjs";
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  personsData: any
  
  constructor(private rest: RestService,private router: Router) { 
    this.getAllPersons();
   }

  ngOnInit(): void {}
  //Get list of all persons 
  getAllPersons() {
    
    this.rest.getListPerson().subscribe(response => {
      console.log(response)
      this.personsData = response
    })
  }

  delete(item) {
    //Delete item in Student data
    this.rest.deletePerson(item.id)
    this.getAllPersons()  
  }

  
  getPersonInfos(item: Person) {
    this.rest.formData = item
    this.rest.Disable = false
  }
}
