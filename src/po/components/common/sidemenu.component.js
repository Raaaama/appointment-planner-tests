import { BaseComponent } from "./base.component.js";

export class SideMenuComponent extends BaseComponent {
  constructor() {
    super("#plannerSiderBar");
  }

  get name() {
    return this.rootEl.$(".name");
  }

  item(param) {
    const selectors = {
      dashboard: '[routerLink="/dashboard"]',
      schedule: '[routerLink="/calenar"]',
      doctors: '[routerlink="/doctors"]',
    };
    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}
