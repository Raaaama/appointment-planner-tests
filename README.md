# appointment-planner-tests

This project contains automated tests for the functionality of the [appointment planner](https://ej2.syncfusion.com/showcase/angular/appointmentplanner/) website using WebdriverIO.

## Installation

Clone the repository and install dependencies:

```bash
  git clone https://github.com/Raaaama/appointment-planner-tests.git
  cd appointment-planner-tests
  npm install
```

## Usage

Run the tests with the following command:

```bash
  npm test
```

An Allure report is generated with each run. To view the report, use:

```bash
  npx allure serve allure-results
```

## Project structure:

```
.
├── ...
├── src                     # Source files
│   ├── config              # Configuration files
│   │   └── wdio.conf.js    # Configuration file for WebDriverIO
│   ├── po                  # Page Object directory
│   │   ├── components      # Reusable UI components
│   │   │   ├── common      # Common components
│   │   │   ├── doctors     # Components specific to the doctors page
│   │   │   └── ...
│   │   └── pages           # Page objects representing different pages
│   └── tests               # Test files directory
└── ...

```
