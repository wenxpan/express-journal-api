import express from "express"
import { EntryModel, CategoryModel, StudentModel, UserModel } from "./db.js"
import entryRoutes from "./routes/entry_routes.js"
import cors from "cors"

// CategoryModel.create({
//   name: "Foo",
//   entries: [{ content: "Bar" }, { content: "Bat" }],
// })

const app = express()

app.use(cors())

// return parsed json in req.body
app.use(express.json())

app.get("/", (request, response) => response.send({ info: "Journal API!" }))

app.get("/categories", async (req, res) => res.send(await CategoryModel.find()))

app.use("/entries", entryRoutes)

// app.get("/students", async (req, res) => res.send(await StudentModel.find()))

// app.post("/students", async (req, res) => {
//   const insertedStudent = await StudentModel.create({
//     fName: req.body.fName,
//     lName: req.body.lName,
//     contactEmail: req.body.contactEmail
//   })
//   res.status(201).send(insertedStudent)
// })

// app.get("/students", async (req, res) => res.send(await UserModel.find()))

// app.post("/users", async (req, res) => {
//   const theStudent = await StudentModel.findById(req.body.student)
//   if (theStudent) {
//     const insertedUser = await UserModel.create({
//       email: req.body.email,
//       password: req.body.password,
//       student: theStudent
//     })
//     res.status(201).send(insertedUser)
//   }
// })

export default app
