
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/Person'
import { RestService } from 'src/app/rest.service'

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  id: number;
  data: Person;
  constructor( public activatedRoute: ActivatedRoute,public router: Router, public rest:RestService ) 
    
   
  {
    this.data = new Person();
   }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.rest.getPerson(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
  update() {
    //Update item by taking id and updated data object
    this.rest.editPerson().subscribe(response => {
      this.router.navigate(['list/person']);
    })
  }

}
