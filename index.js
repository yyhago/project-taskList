const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectTodb = require("./database/db");

connectTodb();
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(5000, () =>
  console.log(`Servidor Rodando: http://localhost:${port}`)
);
