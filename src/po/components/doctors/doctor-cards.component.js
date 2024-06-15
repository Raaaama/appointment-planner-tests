import { BaseComponent } from "../common/base.component.js";

export class DoctorCards extends BaseComponent {
  constructor() {
    super("div[id^='Specialist']");
  }

  async getCardCount() {
    return (await this.rootEls).length;
  }

  async getCards() {
    const cards = await this.rootEls;
    let arr = [];

    for (const e of cards) {
      const name = await e.$(".name").getText();
      const education = await e.$(".education").getText();
      const designation = await e
        .$("div.specialization .specialization-text")
        .getText();
      const experience = await e
        .$("div.experience .specialization-text")
        .getText();

      arr.push({
        name: name,
        education: education,
        designation: designation,
        experience: experience,
      });
    }

    return arr;
  }
}
