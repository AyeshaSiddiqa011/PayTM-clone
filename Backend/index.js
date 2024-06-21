const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index")


app.use("/api/v1", mainRouter)

app.listen(3000)

//https://github.com/100xdevs-cohort-2/paytm/tree/backend-solution/backend

