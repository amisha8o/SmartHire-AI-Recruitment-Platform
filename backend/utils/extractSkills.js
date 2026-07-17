const skills=[

"React",
"Node.js",
"MongoDB",
"JavaScript",
"Python",
"Java",
"HTML",
"CSS",
"Express"

]

function extractSkills(text){

return skills.filter((s)=>

text
.toLowerCase()
.includes(
s.toLowerCase()
)

)

}

module.exports=
extractSkills