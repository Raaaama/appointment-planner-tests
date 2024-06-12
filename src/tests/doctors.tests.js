import { DoctorsPage } from "../po/pages/doctors.page.js";

const doctorsPage = new DoctorsPage();

describe("doctors page", () => {
  beforeEach(async () => {
    await doctorsPage.open();
  });

  it("dashboard is visible", async () => {
    await expect(doctorsPage.sideMenu.rootEl).toBeDisplayed();
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
