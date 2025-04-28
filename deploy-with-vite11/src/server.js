// const express = require("express");
// const cors = require("cors");
// const path = require("path");

import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

const _dirname = path.resolve();

app.listen(process.env.PORT || 3001, () => {
  console.log(`running on port ${process.env.PORT || 3001}`);
});

app.use(express.static(path.join(__dirname, "/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});
