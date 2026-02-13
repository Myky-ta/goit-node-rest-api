// app.js
import express from "express";
import contactsRouter from "./routes/contactsRouter.js";

const app = express();
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

export default app;
