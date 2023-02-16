const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/comics", async (req, res) => {
  console.log(req.query);
  const skip = req.query.skip || "0";
  const limit = req.query.limit || "100";
  const title = req.query.title || "";
  try {
    const response = await axios.get(
      `${process.env.API_URL}/comics?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}&title=${title}`
    );
    console.log(response);
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;