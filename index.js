import "dotenv/config";
import app from "./src/app.js";
import { db } from "./src/database/config.js";

const port = +process.env.PORT || 3000;

db.authenticate()
  .then(() => console.log("Database Autenticate"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("database Sync"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`App running in port: ${port}`);
});
