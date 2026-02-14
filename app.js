import express from "express";
import morgan from "morgan";
import cors from "cors";
import contactsRouter from "./routes/contactsRouter.js";

const app = express();

// Middleware
app.use(morgan("dev"));       // логування запитів
app.use(cors());              // дозволяє фронтенду з іншого домену/порту
app.use(express.json());      // парсинг JSON

// Основні маршрути
app.use("/api/contacts", contactsRouter);

// Обробник 404 для невідомих маршрутів
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// Обробник помилок
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

export default app;
