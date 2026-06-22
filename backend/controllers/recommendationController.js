const Student =
require("../models/Student");

const Job =
require("../models/Job");

const getRecommendations =
async(req,res)=>{

try{

const student =
await Student.findById(
req.params.studentId
);

if(!student){
return res.status(404).json({
message:"Student Not Found"
});
}

const jobs =
await Job.find();

const recommendations =
jobs.map(job=>{

const matched =
job.skills.filter(jobSkill =>

student.skills.some(studentSkill =>

studentSkill
.toLowerCase()
.replace(".js","")
.trim()

===

jobSkill
.toLowerCase()
.replace(".js","")
.trim()

)

);

const score =
job.skills.length > 0
?
Math.round(
(matched.length /
job.skills.length)
*100
)
:
0;

return{
job,
score,
matched
};

})
.sort((a,b)=>
b.score-a.score
);

res.json({
success:true,
recommendations
});

}catch(error){

res.status(500).json({
message:error.message
});

}

};

module.exports={
getRecommendations
};