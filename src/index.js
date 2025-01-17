import express from "express";
import { PORT } from "./utils/dotenvConfig.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Permita apenas o frontend
  })
);

app.use(express.json());

/*app.get("/", () => {
  console.log("teste");
});*/

app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server listening...");
});
