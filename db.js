import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

async function dbClose() {
  await mongoose.connection.close()
  console.log("Database disconnected")
}

mongoose
  .connect(process.env.ATLAS_DB_URL)
  // .then((m) =>
  //   console.log(
  //     m.connection.readyState === 1
  //       ? "Mongoose connected!"
  //       : "Mongoose failed to connect"
  //   )
  // )
  .catch((err) => console.error(err))

const entrySchema = new mongoose.Schema({
  category: { type: mongoose.ObjectId, ref: "Category" },
  content: { type: String, required: true }
})

const EntryModel = mongoose.model("Entry", entrySchema)

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }
  // entries: [entrySchema],
})

const CategoryModel = mongoose.model("Category", categorySchema)

const studentSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  quote: { type: String }
})

const StudentModel = mongoose.model("Student", studentSchema)

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  student: { type: mongoose.ObjectId, ref: "Student" }
})

const UserModel = mongoose.model("User", userSchema)

export { EntryModel, CategoryModel, StudentModel, UserModel, dbClose }
