function InterviewQuestions({ skills }) {

const defaultQuestions = [
"Tell me about yourself.",
"What are your strengths?",
"Why should we hire you?"
]

const questionBank = {
React: [
"What is Virtual DOM?",
"What is useEffect?",
"Difference between State and Props?"
],

JavaScript: [
"What is closure?",
"Explain promises and async/await.",
"What is event bubbling?"
],

Node: [
"What is Express.js?",
"What is middleware?",
"How does Node.js handle async tasks?"
],

MongoDB: [
"What is NoSQL?",
"What is aggregation?",
"Difference between find() and findOne()?"
],

Python: [
"What are decorators?",
"What is list comprehension?",
"What is a generator?"
],

Java: [
"What is JVM?",
"What is method overloading?",
"What is OOP?"
]
}

let questions = []

skills.forEach(skill => {

if(questionBank[skill]){
questions = [...questions, ...questionBank[skill]]
}

})

if(questions.length===0){
questions = defaultQuestions
}

return(

<div
style={{
background:"#122248",
padding:"30px",
borderRadius:"20px",
marginTop:"25px"
}}
>

<h2>🤖 AI Interview Questions</h2>

{questions.map((q,index)=>(

<div
key={index}
style={{
padding:"15px",
marginTop:"12px",
background:"#0d1838",
borderRadius:"10px"
}}
>

{index+1}. {q}

</div>

))}

</div>

)

}

export default InterviewQuestions