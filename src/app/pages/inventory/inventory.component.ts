// ====== ./app/home/home.component.ts ======

// Import component decorator
import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'proto-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

// Component class
export class protoInventory {

  /* Responsive Filter Side Nav */
  @ViewChild('filterDrawer') filterDrawer: MatSidenav;
  navMode = 'side';
  @HostListener('window:resize', ['$event']) 
  onResize(event: any) {
    this.toggleFilterDrawer();
  }
  toggleFilterDrawer() {
    // Init Responsive Sidenav Filter
    if (this.filterDrawer && typeof this.filterDrawer.close === 'function') {
      if (window.innerWidth < 1024) {
        this.navMode = 'over';
        this.filterDrawer.close();
      } else if (window.innerWidth > 1024) {
        this.navMode = 'side';
        this.filterDrawer.open();
      }
    }
  }

}
