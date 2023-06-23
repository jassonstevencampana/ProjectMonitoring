import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {


  toggleSidenavbar() {

    let elem = document.getElementById("accordionSidebar");
    elem?.classList.toggle("toggled");

    let body = document.getElementById("page-top");
    body?.classList.toggle("sidebar-toggled");
  }
}
