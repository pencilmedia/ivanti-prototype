import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  app_title = 'Ivanti';
  otherCountryCode = 'en-US';
  countries = [{
  	name: 'English',
  	code: 'en-US'
  },
  {
  	name: 'German',
  	code: 'de-DE'
  }];

}

  // JS
