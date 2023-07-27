![Ehsan@sh](./image/Favicon.ico)

# User Story:

>*AS AN employee* with access to sensitive data
>*I WANT* to randomly generate a password that meets certain criteria
>*SO THAT* I can create a strong password that provides greater security

---

# Acceptance Criteria:
**GIVEN I need a new, secure password**
- *WHEN I* click the button to generate a password
  *THEN I* am presented with a series of prompts for password criteria
- *WHEN* prompted for password criteria
  *THEN I* select which criteria to include in the password
- *WHEN* prompted for the length of the password
  *THEN I* choose a length of at least 8 characters and no more than 128 characters
- *WHEN* asked for character types to include in the password
  *THEN I* confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- *WHEN* I answer each prompt
  *THEN* my input should be validated and at least one character type should be selected
- *WHEN* all prompts are answered
  *THEN* a password is generated that matches the selected criteria
- *WHEN* the password is generated
  *THEN* the password is either displayed in an alert or written to the page

---

# Algorithm:
>Create and deploy a  password generater which meets certain criteria to generate strong passwords.

---
## Tasks:
1. Create a prompt which displays the options that user has with complete discription and instruction.
2. Add a section which lets a user to select between various choices.
3. Get an input from the user which determine the length of the password characters.(Validate the input to meet the critera)
4. Get confirmation for critera choices.
5. Validate choices to make sure that they meet the least criterion expected.
6. Define needed and proper variables to store data. use if statements to make sure that the created password meets the user's expectations. Then generate a random password.
7. Display the password inside the HTML file. 

---
## Pattern Recognition:
- Use Function.
- Use alert, confirm, prompt methods to display messages and to receive inputs.
- Use if statement to validate any statement or expresion that is necessary.
- Use for loop and random method.
- Use let keyword to create variables.
- Use return to return the final value.

---
## Abstraction:
>Ignore the style and structure as they have been created already.

---
## sequence:
**N/A**

---
## Debug:
**N/A**