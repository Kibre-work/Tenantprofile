const express = require("express")
const cors = require("cors")
const logger = require("./middleware/logger")
const tenantRoutes = require("./routes/tenant")

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use(tenantRoutes)

app.get("/test", (req, res) => {
  res.json({ message: "Server works!" })
})

app.listen(3001, () => {
  console.log("Server running on port 3001")
})