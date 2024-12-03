const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

/*********************************************************************
 *                 Send Contact Us Information
 **********************************************************************/
recordRoutes.route("/contact-us").post(async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Get the database connection
    const dbConnect = dbo.getDb();

    // Insert the contact information into the "contacts" collection
    const result = await dbConnect.collection("Contact").insertOne({
      name,
      email,
      message,
      submittedAt: new Date(),
    });

    // Respond with a success message
    res.status(200).json({ message: "Form submitted successfully!", result });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Failed to submit the form. Please try again later." });
  }
});
/*********************************************************************
 *                       Send Donations
 **********************************************************************/
recordRoutes.route("/donations").post(async (req, res) => {
    const dbConnect = dbo.getDb();
    const donation = {
      name: req.body.name,
      email: req.body.email,
      amount: req.body.amount,
      date: new Date(),
    };
  
    try {
      await dbConnect.collection("donations").insertOne(donation);
      const totalDonations = await dbConnect
        .collection("donations")
        .aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }])
        .toArray();
  
      const total = totalDonations[0]?.total || 0;
      res.status(200).json({ total });
    } catch (error) {
      console.error("Error saving donation:", error);
      res.status(500).json({ error: "Failed to save donation" });
    }
  });
  

  /*********************************************************************
 *                       Grab Donations Total
 **********************************************************************/
  // Route to fetch total donations
  recordRoutes.route("/donations/total").get(async (req, res) => {
    const dbConnect = dbo.getDb();
  
    try {
      const totalDonations = await dbConnect
        .collection("donations")
        .aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }])
        .toArray();
  
      const total = totalDonations[0]?.total || 0;
      res.status(200).json({ total });
    } catch (error) {
      console.error("Error fetching total donations:", error);
      res.status(500).json({ error: "Failed to fetch total donations" });
    }
  });
  
  module.exports = recordRoutes;

module.exports = recordRoutes;
