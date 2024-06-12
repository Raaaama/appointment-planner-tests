import { BaseComponent } from "../common/base.component.js";

export class AddDoctorComponent extends BaseComponent {
  constructor() {
    super(".new-doctor-dialog");
  }

  get overlay() {
    return this.rootEl.$("e-dlg-overlay");
  }

  get modalTitle() {
    return this.rootEl.$("div[id*='title']");
  }

  get closeBtn() {
    return this.rootEl.$("button[title='Close']");
  }

  get cancelBtn() {
    return this.rootEl.$("button[class='e-control e-btn e-lib e-normal']");
  }

  get saveBtn() {
    return this.rootEl.$("div[class='button-container'] .e-primary");
  }

  get nameInput() {
    return this.rootEl.$("input[name='Name']");
  }

  get setMaleBtn() {
    return this.rootEl.$("input[value='Male']");
  }

  get setFemaleBtn() {
    return this.rootEl.$("input[value='Female']");
  }

  get mobileInput() {
    return this.rootEl.$("input[id='DoctorMobile']");
  }

  get emailInput() {
    return this.rootEl.$("input[name='Email']");
  }

  get departmentSelect() {
    return this.rootEl.$(
      "div[aria-labelledby='Specialization_hidden'] select[name='Specialization']"
    );
  }

  get educationInput() {
    return this.rootEl.$("input[name='Education']");
  }

  get experienceSelect() {
    return this.rootEl.$("select[name='Experience']");
  }

  get designationInput() {
    return this.rootEl.$("input[name='Designation']");
  }

  get dutyTimingSelect() {
    return this.rootEl.$("select[name='DutyTiming']");
  }
}
