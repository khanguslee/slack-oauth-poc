import express from "express";

const PORT = 3000;

const start = () => {
  const app = express();

  app.use("/", (req, res, next) => {
    return res.send("JavaScript is AWESOME");
  });

  app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}...`);
  });
};

export default { start };
