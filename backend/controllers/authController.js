const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
try {
const { name, email, password } = req.body

const userExist = await User.findOne({ email })
if (userExist) {
return res.status(400).json({ message: "User already exists" })
}

const hashedPassword = await bcrypt.hash(password, 10)

const user = await User.create({
name,
email,
password: hashedPassword
})

res.json({ message: "User Registered" })

} catch (err) {
console.log(err)
res.status(500).json({ message: "Server Error" })
}
}

const login = async (req, res) => {
try {
const { email, password } = req.body

const user = await User.findOne({ email })

if (!user) {
return res.status(400).json({ message: "User not found" })
}

const isMatch = await bcrypt.compare(password, user.password)

if (!isMatch) {
return res.status(400).json({ message: "Wrong password" })
}

const token = jwt.sign(
{ id: user._id },
"secret123",
{ expiresIn: "1d" }
)

res.json({
message: "Login successful",
token
})

} catch (err) {
console.log(err)
res.status(500).json({ message: "Server Error" })
}
}

module.exports = { register, login }