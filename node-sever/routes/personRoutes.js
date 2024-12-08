const express = require("express");
const router = express.Router();
const Person = require("../models/person");

// GET: List all people
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add a new person
router.post("/", async (req, res) => {
  const { name, age, gender, mobile } = req.body;
  const person = new Person({ name, age, gender, mobile });

  try {
    const savedPerson = await person.save();
    res.status(201).json(savedPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update a person
router.put("/:id", async (req, res) => {
  const { name, age, gender, mobile } = req.body;

  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      { name, age, gender, mobile },
      { new: true }
    );
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Remove a person
router.delete("/:id", async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.json({ message: "Person deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
