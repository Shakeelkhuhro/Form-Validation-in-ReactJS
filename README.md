# Form Validation in ReactJS
Form validation ensures that user inputs in a form meet requirements before submission. In this React application, we use the react-hook-form library for efficient form validation. It offers features like input validation rules, error messages, and submission handling. Validation rules are defined using the register function, allowing you to specify requirements like required fields, length limits, and patterns. The library simplifies error handling and message display, improving user experience. By implementing form validation, you ensure valid data, provide prompt error feedback, and enhance your application's usability and reliability. <br>

This is a simple React application that demonstrates form validation using the `react-hook-form` library.

# See Live Here:
    https://shakeelkhuhro.github.io/Form-Validation-in-ReactJS/

## Overview

The application consists of a form with two input fields: Name and Email. The form validation is performed using the `react-hook-form` library, which provides an easy and efficient way to manage form state and validation rules.

## Features

- Validates the Name field to ensure it is not empty and has a maximum length of 20 characters.
- Validates the Email field to ensure it is not empty and matches the pattern of a valid email address.
- Displays error messages when the form fields are invalid.
- Resets the form and shows a success message when the form is submitted successfully.

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node package manager)

## Getting Started

1. Clone the repository:
    git clone https://github.com/Shakeelkhuhro/Form-Validation-in-ReactJS
2. Install the dependencies:
    cd form-validation
    npm install
3. Run the application:
    npm start

4. Open your browser and navigate to `http://localhost:3000` to see the form.

## Usage

- Enter your name and email in the respective fields.
- The form will display error messages if the fields are invalid.
- Once the form is submitted successfully, the fields will be reset, and a success message will be displayed.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality of the form, please submit a pull request.

## License

This project is licensed under the MIT License. Feel free to use and modify the code as per your needs.
