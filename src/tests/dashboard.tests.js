import { DashboardPage } from "../po/pages/dashboard.page.js";

const dashboardPage = new DashboardPage();

describe("dashboard", async () => {
  beforeEach(async () => {
    await dashboardPage.open();
  });

  it("check page title", async () => {
    await expect(browser).toHaveTitle(
      "Appointment Planner - Syncfusion Angular Components Showcase Appp"
    );
  });
});
