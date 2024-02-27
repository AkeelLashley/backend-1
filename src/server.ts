import dotenv from "dotenv";
import app from "./app";
dotenv.config();

const PORT: string | number = process.env.PORT ?? 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
