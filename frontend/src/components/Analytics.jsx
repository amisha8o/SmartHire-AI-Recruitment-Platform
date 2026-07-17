import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip
} from "recharts"

function Analytics({
score,
saved,
applied,
jobs
}){

const data=[

{
name:"ATS",
value:score
},

{
name:"Saved",
value:saved
},

{
name:"Applied",
value:applied
},

{
name:"Jobs",
value:jobs
}

]

return(

<div
style={{
background:"#122248",
padding:"25px",
borderRadius:"20px",
marginTop:"30px"
}}
>

<h2>📊 Analytics Dashboard</h2>

<div
style={{
width:"100%",
height:"320px",
marginTop:"20px"
}}
>

<ResponsiveContainer>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="value"
fill="#3b82f6"
radius={[8,8,0,0]}
/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

)

}

export default Analytics