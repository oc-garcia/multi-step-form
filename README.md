# Multi-Step Form Wizard

This repository contains a multi-step form wizard built using TypeScript, React, and CSS modules. The purpose of this project is to demonstrate the implementation of a complex form that spans multiple steps, allowing users to input information progressively.

Please note that this is the 1.0 version of the project and there are plans to refactor it in the future. The current version was intentionally designed with a high level of coupling and the use of setters passed around throughout the codebase. This approach was chosen for study purposes, allowing for a deeper understanding of the challenges associated with such design patterns.

The next part of the exercise will involve refactoring the project to improve code organization and maintainability. The React Hook Form context and Zod will be utilized for form validations in the upcoming version. These changes will address the current shortcomings and provide a more robust and scalable solution.

## Features

- Multi-step form with a wizard-like interface.
- Each step of the form has its own set of input fields and validations.
- Progress indicator to show the current step and overall progress.
- Previous and Next buttons to navigate between steps.
- Data persistence across steps, allowing users to go back and forth without losing their input.
- CSS modules for scoped styling, ensuring component styles don't clash.

## Technologies Used

- TypeScript: A statically typed superset of JavaScript that adds static typing to the language.
- React: A popular JavaScript library for building user interfaces.
- CSS modules: A CSS file format where class names are automatically scoped to their respective components, preventing style conflicts.

## Installation

Clone the repository:

```bash
git clone https://github.com/oc-garcia/multi-step-form.git
```

Navigate to the project directory:

```bash
cd multi-step-form
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Usage

Once the application is running, you can interact with the multi-step form wizard by following these steps:

1. Start filling out the form by providing the required information in the first step.
2. Click the "Next" button to proceed to the next step.
3. Continue filling out the form in subsequent steps, observing the progress indicator to track your progress.
4. At any point, you can click the "Previous" button to navigate back to the previous step and make changes.
5. Once you reach the final step, complete the form and submit the data.

## Development Notes

The current version of the project was intentionally designed with a high level of coupling and the use of setters passed around throughout the codebase. This approach was chosen for study purposes, allowing for a deeper understanding of the challenges associated with such design patterns.

In the upcoming refactoring phase, the React Hook Form context and Zod will be introduced to improve code organization, maintainability, and scalability. These changes will address the current shortcomings and provide a more robust solution.

## Deployment

This form is deployed and can be accessed at the following link: [Multi Step Form](https://multi-step-form-oc-garcia.vercel.app/)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

Thank you for your interest in this multi-step form wizard project!

## Project Image
![](./public/Captura%20de%20tela%20de%202023-06-20%2016-35-21.png#vitrinedev)

