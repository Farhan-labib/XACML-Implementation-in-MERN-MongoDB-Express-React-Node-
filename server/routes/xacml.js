// routes/xacml.js
const express = require("express");
const router = express.Router();
const PEP = require("../xacml/PEP");

const PEPHandler = async (req, res) => {
    const { role, action, resource } = req.body;
  
    try {
      // Call PEP function passing role, action, resource
      const authorized = await PEP(role, action, resource);
      res.json({ authorized });
    } catch (error) {
      console.error("Error in PEP:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
};

// Define POST endpoint for PEP
router.post("/", PEPHandler);

module.exports = router;
