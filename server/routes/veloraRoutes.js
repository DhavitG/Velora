import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const form = new FormData();
    form.append("prompt", prompt);
    form.append("output_format", "jpeg");
    form.append("model", "stable-diffusion-xl-v1");

    const response = await fetch(
      "https://api.stability.ai/v2beta/stable-image/generate/core",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "application/json",
        },
        body: form,
      }
    );

    const data = await response.json();

    if (!data.image) {
      return res.status(500).json({
        error: "Image generation failed",
        stabilityError: data,
      });
    }

    res.status(200).json({ photo: data.image });
  } catch (error) {
    console.error("Image generation error:", error);
    res.status(500).json({ error: "Server error during image generation" });
  }
});

export default router;
