// importing necessary packages
// npm init
const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.static("public")) // hosting the public folder 

app.get("/get-ndjson-data", (req, res) => {
  ndjsonToJson("./ACAH.ndjson", res) // change the filename to whichever institute you need
})

// localhost create port 3000
const port = 3000
app.listen(port, () => console.log("listening on port 3000"))

// changing ndjson files to json
// https://github.com/madnight/ndjson-to-json
function ndjsonToJson(filename, res) {
  fs.readFile(filename, function (err, ndjsonData) {
    if (err) {
      console.log(err);
    } else {
      var data = ndjsonData.toString().trim().split('\n').map(line => JSON.parse(line));
      //SENDS THE FILE DATA TO FRONT-END/CLIENT
      res.json(data)
    }
  });
}