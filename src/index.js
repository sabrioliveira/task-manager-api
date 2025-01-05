import express from "express";
import { PORT } from "./config/dotenvConfig.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(express.json());

/*app.get("/", () => {
  console.log("teste");
});*/

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log("Server listening...");
});
