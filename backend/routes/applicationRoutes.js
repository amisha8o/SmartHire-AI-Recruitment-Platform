const express = require("express");
const router = express.Router();

const Application = require("../models/Application");

/* ==========================
   Update Candidate Status
========================== */

router.put("/update-status/:id", async (req, res) => {

    try {

        const { status, interviewDate, recruiterNotes } = req.body;

        const application = await Application.findByIdAndUpdate(

            req.params.id,

            {
                status,
                interviewDate,
                recruiterNotes
            },

            { new: true }

        );

        res.json({
            success: true,
            application
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Status Update Failed"
        });

    }

});

/* ==========================
   Get All Applications
========================== */

router.get("/", async (req, res) => {

    try {

        const applications = await Application.find()
            .populate("candidate")
            .populate("jobId");

        res.json(applications);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Error"
        });

    }

});

module.exports = router;