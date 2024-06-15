import { BaseComponent } from "../common/base.component.js";

export class ListHeaderComponent extends BaseComponent {
  constructor() {
    super(".specialization-types");
  }

  get specializationSpan() {
    return this.rootEl.$(
      "//span[contains(@aria-labelledby, 'Specialization')]"
    );
  }

  get addNewDoctorBtn() {
    return this.rootEl.$("button.e-control");
  }

  async getSelectedValue() {
    const text = await (
      await this.rootEl.$("div.department-value span.name")
    ).getText();
    return text;
  }
}
