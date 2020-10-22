const express = require("express");
const app = express();
app.use(require("cors")());

// let abc = require("./tools/basic-data")();

// app.get("/", (req, res) => {
//   let post = require("./tools/post")(1, abc);
//   //   console.log(post);
//   res.send(post);
// });

app.get("/cnbeta-api/items", async (req, res) => {
	let link = "https://www.cnbeta.com/backend.php";
	res.send(await require("./tools/basic-data")(link));
});
app.listen(3000, () => {
	console.log("api:http://localhost:3000/cnbeta-api/items");
});
