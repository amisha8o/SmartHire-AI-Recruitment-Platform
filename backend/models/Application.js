const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({

    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    },

    company: String,

    jobTitle: String,

    atsScore: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: [
            "Applied",
            "Reviewing",
            "Shortlisted",
            "Interview",
            "Selected",
            "Rejected"
        ],
        default: "Applied"
    },

    interviewDate: String,

    recruiterNotes: String,

    appliedAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Application", applicationSchema);