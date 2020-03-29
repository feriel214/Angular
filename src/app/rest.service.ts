import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Person} from 'src/app/models/person';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  PHP_API_SERVER = "http://127.0.0.1:8000";
  constructor(private  httpClient: HttpClient) { }
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 
  // Create a new Person
  addPerson(person): Observable<Person> {
    return this.httpClient
      .post<Person>(`${this.PHP_API_SERVER}/api/add/person`, JSON.stringify(person), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  // Get single Person data by ID
  getPerson(id): Observable<Person> {
    return this.httpClient
      .get<Person>(`${this.PHP_API_SERVER}/api/show/person`+ '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get Person data
  getListPerson(): Observable<Person> {
    return this.httpClient
      .get<Person>(`${this.PHP_API_SERVER}/api/list/person`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  // Update item by id
  editPerson(id, person): Observable<Person> {
    return this.httpClient
      .put<Person>(this.PHP_API_SERVER +'/api/edit/person/' +id, JSON.stringify(person), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Delete item by id
  deletePerson(id) {
    return this.httpClient
      .delete<Person>(`${this.PHP_API_SERVER}/api/delete/person` + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
 

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
 
 
}
