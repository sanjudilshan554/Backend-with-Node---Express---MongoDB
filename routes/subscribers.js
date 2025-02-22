const express = require("express");
const router = express.Router();

const Subscriber = require("../models/subscriber");

// Getting All
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getSubscriber, (req, res) => {
  res.send(res.subscriber.name);
});

// Creating One
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscriber: req.body.subscriber,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.post("/:id", (req, res) => {});

// Deleting One
router.patch("/:id", (req, res) => {});

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Cannot find subscriber" });
  }

  res.subscriber = subscriber;
  next();
}

module.exports = router;
