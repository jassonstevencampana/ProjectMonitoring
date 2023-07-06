import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }


  toggleSidenavbar() {

    let elem = document.getElementById("accordionSidebar");
    elem?.classList.toggle("toggled");

    let body = document.getElementById("page-top");
    body?.classList.toggle("sidebar-toggled");
  }
}
