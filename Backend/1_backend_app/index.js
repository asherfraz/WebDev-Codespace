const router = require("./routes/route")
const express = require("express")
const app = express();
const PORT = 3000;

app.use(express.json())
// mounting the routes middleware on the app
app.use(router)
// app.use("/api", router)


// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })

// app.get("/about", (req, res) => {
//     res.send("This is About Page!")
// })

// app.get("/contact", (req, res) => {
//     res.send("This is contact Page!")
// })

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})