const express = require("express");

const PORT = 3001;
const app = express();
const apiRoutes =  require('./routes/ApiRoutes/APIRoutes')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
