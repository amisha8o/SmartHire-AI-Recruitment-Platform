const express = require("express")

const router = express.Router()

const {
downloadReport
} = require("../controllers/reportController")

router.get(
"/report",
downloadReport
)

module.exports = router