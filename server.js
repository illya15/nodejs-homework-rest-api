const mongoose = require("mongoose");


const app = require("./app");



const { DB_HOST } = process.env;
const { PORT } = process.env;
const portForConnection = PORT || 3000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(portForConnection, () => {
      console.log(
        `Database connection successfulOK. Use our API on port in local connection: ${portForConnection}`
      );
    });
  })
  .catch((error) => {
    console.log(
      `Database connection is not successfulOK because of: ${error.message}`
    );
    process.exit(1);
  });