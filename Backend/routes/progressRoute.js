import express from "express";
import { Progress } from "../models/progressModel.js";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    if (!req.body.date || !req.body.weight) {
      return res.status(400).send({ message: "Send all progress fields" });
    }
    const newProgress = {
      date: req.body.date,
      weight: req.body.weight,
    };
    const progress = await Progress.create(newProgress);
    return res.status(201).send(progress);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ message: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const progress = await Progress.find({});
    return res.status(200).json({ count: progress.length, data: progress });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ message: err.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.date || !req.body.weight) {
      return res.status(400).send({ message: "Send all progress fields" });
    }
    const { id } = req.params;
    const progress = await Progress.findByIdAndUpdate(id, req.body);
    if (!progress) {
      return res.status(404).send({ message: "Progress not found" });
    }
    return res.status(200).json({ data: progress });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ message: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const progress = await Progress.findByIdAndDelete(id);
    if (!progress) {
      return res.status(404).send({ message: "Progress not found" });
    }
    return res.status(200).json({ message: "Progress deleted" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ message: err.message });
  }
});
export default router;
