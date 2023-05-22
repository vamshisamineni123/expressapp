const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3008;

// Parse JSON request bodies
app.use(bodyParser.json());
app.use(cors());
// Dummy contacts data (you can replace this with a database)
let contacts = [{
  "name": "Sirikonda ganesh",
  "email": "pc4@gmail.com",
  "id": "0ec86800-6629-4331-92a9-35c2edc04b1d"
}];

// API endpoint to get all contacts
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// API endpoint to add a new contact
app.post('/contacts', (req, res) => {
  const newContact = req.body;
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// API endpoint to delete a contact
app.delete('/contacts/:id', (req, res) => {
  const id = req.params.id;
  contacts = contacts.filter((contact) => contact.id !== id);
  res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
