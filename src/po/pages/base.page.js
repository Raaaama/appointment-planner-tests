import { HeaderComponent, SideMenuComponent } from "../components/index.js";

export class BasePage {
  constructor(url) {
    this.url = `https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#${url}`;
    this.header = new HeaderComponent();
    this.sideMenu = new SideMenuComponent();
  }

  open() {
    return browser.url(this.url);
  }
}
