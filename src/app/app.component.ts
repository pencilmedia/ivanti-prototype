// import { Component } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core'; //To enable encapsulation changes
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Emulated is default 
  // encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  // variables
}
