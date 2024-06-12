import { BaseComponent } from "../common/base.component.js";

export class DoctorCards extends BaseComponent {
  constructor() {
    super("div[id^='Specialist']");
  }

  async getCardCount() {
    return (await this.rootEls).length;
  }

  async getCard(index) {
    const cards = await this.rootEls;
    return cards[index];
  }
}
