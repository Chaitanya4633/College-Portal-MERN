import express from "express";
import Profile from "../models/Profile.js";

const router = express.Router();

// Save profile data
router.post("/add", async (req, res) => {
  try {
    const { username, email, country, profileImage } = req.body;
    const newProfile = new Profile({ username, email, country, profileImage });

    await newProfile.save();
    res.status(201).json({ message: "Profile saved successfully!", profile: newProfile });
  } catch (error) {
    res.status(500).json({ message: "Error saving profile", error });
  }
});

// Fetch user profile
router.get("/:email", async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.params.email });
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error });
  }
});

export default router;
