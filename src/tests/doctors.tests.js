import { DoctorsPage } from "../po/pages/doctors.page.js";
import doctorData from "../po/data/doctors.js";

const doctorsPage = new DoctorsPage();

describe("doctors page", () => {
  beforeEach(async () => {
    await doctorsPage.open();
  });

  it("dashboard is visible", async () => {
    await expect(doctorsPage.sideMenu.rootEl).toBeDisplayed();
  });

  it("filter doctors", async () => {
    let specialization = "General Medicine";
    await (await doctorsPage.listHeader.specializationSpan).click();
    let formatted = specialization.toLowerCase().replace(/\s/g, "");
    const option = await $(`li[data-value='${formatted}']`);
    await option.waitForStable({ timeout: 5000 });
    await option.click();
    const val = await doctorsPage.listHeader.getSelectedValue();
    await expect(val).toEqual(specialization);

    let cards = await doctorsPage.doctorCards.getCards();
    let names = cards.map((e) => e.name);

    let expectedNames = doctorData.filter(
      (e) => e.specialization === specialization
    );
    expectedNames = expectedNames.map((e) => e.name);

    await expect(names).toEqual(expectedNames);
  });

  it("add a new doctor with default options", async () => {
    const cardCount = await doctorsPage.doctorCards.getCardCount();
    (await doctorsPage.listHeader.addNewDoctorBtn).click();
    await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed();

    const modal = doctorsPage.addDoctorModal;
    await modal.nameInput.setValue("John Doe");
    await modal.setFemaleBtn.click();
    await modal.mobileInput.setValue("1234567890");
    await modal.emailInput.setValue("john.doe@example.com");
    await modal.educationInput.setValue("MD");
    await modal.designationInput.setValue("Senior Doctor");
    await modal.saveBtn.click();

    await expect(await doctorsPage.doctorCards.getCardCount()).toBe(
      cardCount + 1
    );
  });
});
