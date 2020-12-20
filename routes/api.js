const express = require("express");
const router = express.Router();

// Response from /api
router.get("/", (req, res) => {
  res.send("From API route");
});

router.get("/graph_data", (req, res) => {
  var graph_data_response = [];
  graph_data_response = generateData();
  res.send(graph_data_response);
  //   setTimeout(generateData, 3000);
});

function generateData() {
  const values_to_generate = 10;
  const max_num = 50;
  const min_num = 1;

  var data = [];
  for (let index = 0; index < values_to_generate; index++) {
    let temp = +parseFloat(
      Math.random() * (max_num - min_num + 1) + min_num
    ).toFixed(2);
    data.push(temp);
  }
  console.log(data);
  return data;
}

module.exports = router;
