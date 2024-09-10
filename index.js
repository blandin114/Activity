const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define your personal data
const personalData = {
  firstName: 'Blandin Bhryle',
  lastName: 'Son',
  age: 20,
  schoolEmail: 'blou.son.swu@phinmaed.com'
};

// Route for /firstname
app.get('/firstname', (req, res) => {
  res.send(personalData.firstName);
});

// Route for /lastname
app.get('/lastname', (req, res) => {
  res.send(personalData.lastName);
});

// Route for /age
app.get('/age', (req, res) => {
  res.send(personalData.age.toString());
});

// Route for /schoolemail
app.get('/schoolemail', (req, res) => {
  res.send(personalData.schoolEmail);
});

// Route for /mydata
app.get('/mydata', (req, res) => {
  res.json({
    first_name: personalData.firstName,
    last_name: personalData.lastName,
    age: personalData.age,
    school_email: personalData.schoolEmail
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
