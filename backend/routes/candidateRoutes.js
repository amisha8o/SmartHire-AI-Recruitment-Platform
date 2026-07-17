const express = require("express");
const router = express.Router();

const Candidate = require("../models/Candidate");

/*
============================
Get All Candidates
============================
*/

router.get("/", async (req, res) => {

  try {

    const candidates = await Candidate.find().sort({ _id: -1 });

    res.json(candidates);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

/*
============================
Add Candidate
============================
*/

router.post("/", async (req, res) => {

  try {

    const candidate = new Candidate(req.body);

    await candidate.save();

    res.json({
      message: "Candidate Added"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

/*
============================
Update Candidate Status
============================
*/

router.put("/:id", async (req, res) => {

  try {

    await Candidate.findByIdAndUpdate(

      req.params.id,

      {
        status: req.body.status
      }

    );

    res.json({

      message: "Status Updated"

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      message: "Server Error"

    });

  }

});

/*
============================
Delete Candidate
============================
*/

router.delete("/:id", async (req, res) => {

  try {

    await Candidate.findByIdAndDelete(req.params.id);

    res.json({

      message: "Candidate Deleted"

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      message: "Server Error"

    });

  }

});

module.exports = router;