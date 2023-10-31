const mongoose = require("mongoose");

const connectTodb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@tasklist.igd3f4a.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoBG CONECTADO!");
    })
    .catch((err) => console.log(err));
};

module.exports = connectTodb;
