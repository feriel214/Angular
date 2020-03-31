import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { PersonAddComponent } from './components/person-add/person-add.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { RestService } from 'src/app/rest.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonAddComponent,
    PersonDetailComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [RestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
