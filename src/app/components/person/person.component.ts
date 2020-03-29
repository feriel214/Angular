import { Component, OnInit } from '@angular/core';
import { Person} from 'src/app/models/Person';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personsData: any;
  constructor(private rest:RestService) 
  { 
    this.personsData = [];
  }
  ngOnInit(): void {
    this.getAllPersons();
  }
  getAllPersons() {
    //Get saved list of students
    this.rest.getListPerson().subscribe(response => {
      console.log(response);
      this.personsData = response;
    })
  }
 
 
  delete(item) {
    //Delete item in Student data
    this.rest.deletePerson(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllPersons();
    });
  }



}
