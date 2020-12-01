// import necessary dependencies
const express = require('express');
      dotenv = require('dotenv');
      path = require('path');
      axios = require('axios');

// express returns a set of functions that we store in a variable called app which we will use to access different express functions
const app = express();

// get our env variables
dotenv.config();
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

// our api url
const API_URL = `http://dummy.restapiexample.com/api/v1/${API_KEY}`;

// hosting our html:
// method #2
app.use(express.static('public'))

// serves things
// takes in two arguments, request & response
// req -> what you're receiving
// res -> response you're sending
// app.get => listener
// axios.get => makes a get request
// app.get("/", (request, response) => {
//   // hosting our html:
//   // method #1
//   // response.sendFile(path.resolve(__dirname, 'public/index.html'));
// })

app.get("/api", async function(request, response) {
  const res = await axios.get(API_URL);
  const data = await res.data;
  let employees = await data.data;

  // clean up the array:
  // employees = employees.map(d => {
  //   return {
  //     id: parseInt(d.id),
  //     employee_name: d.employee_name,
  //     employee_salary: parseInt(d.employee_salary),
  //     employee_age: parseInt(d.employee_age),
  //     profile_image: d.profile_image
  //   }
  // })

  employees = employees.map(d => ({
    ...d,
    id: parseInt(d.id),
    employee_salary: parseInt(d.employee_salary),
    employee_age: parseInt(d.employee_age)
  }))

  response.json(employees);
})

// takes callback function
// listens for the server to start
app.listen(PORT, () => console.log(`something is happening at localhost:${PORT}`))

// have a 404 error message
app.use((req, res, next) => {
  res.status(404).send('sorry can\'t find that!')
});
