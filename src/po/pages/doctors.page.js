import { BasePage } from "./base.page.js";
import {
  AddDoctorComponent,
  ListHeaderComponent,
  DoctorCards,
} from "../components/index.js";

export class DoctorsPage extends BasePage {
  constructor() {
    super("/doctors");
    this.listHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
    this.doctorCards = new DoctorCards();
  }
}
