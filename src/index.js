import express from "express";
import { PORT } from "./utils/dotenvConfig.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

/*app.get("/", () => {
  console.log("teste");
});*/

app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server listening...");
});
