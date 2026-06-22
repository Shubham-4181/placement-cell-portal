const Job = require("../models/Job");

const createJob = async (req, res) => {
  try {

const job = await Job.create({
title: req.body.title,
description: req.body.description,
skills: req.body.skills,
package: req.body.package,
companyId: req.user.id
});

    res.status(201).json({
      success: true,
      job
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


const getJobs = async (req, res) => {
  try {

    const jobs = await Job.find()
      .populate("companyId", "name email");

    res.status(200).json({
      success: true,
      jobs
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getMyJobs = async (req, res) => {
  try {

    const jobs = await Job.find({
      companyId: req.user.id
    });

    res.status(200).json({
      success: true,
      jobs
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const deleteJob = async (req, res) => {
  try {

    await Job.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Job Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const searchJobs = async (req, res) => {
  try {

    const search =
      req.query.search || "";

    const jobs =
      await Job.find({
        $or: [
          {
            title: {
              $regex: search,
              $options: "i"
            }
          },
          {
            description: {
              $regex: search,
              $options: "i"
            }
          },
          {
            skills: {
              $elemMatch: {
                $regex: search,
                $options: "i"
              }
            }
          }
        ]
      })
      .populate(
        "companyId",
        "name"
      );

    res.status(200).json({
      success: true,
      jobs
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const filterJobs = async (req, res) => {

try{

const minPackage =
Number(req.query.package || 0);

const skill =
req.query.skill || "";

let query = {};

if(minPackage > 0){

query.package = {
$gte:minPackage
};

}

if(skill){

query.skills = {
$elemMatch:{
$regex:skill,
$options:"i"
}
};

}

const jobs =
await Job.find(query)
.populate(
"companyId",
"name"
);

res.status(200).json({
success:true,
jobs
});

}catch(error){

res.status(500).json({
message:error.message
});

}

};

const sortJobs = async (req,res)=>{

try{

const sort =
req.query.sort;

let sortQuery = {};

if(sort==="high"){

sortQuery = {
package:-1
};

}

else if(sort==="low"){

sortQuery = {
package:1
};

}

else if(sort==="new"){

sortQuery = {
createdAt:-1
};

}

const jobs =
await Job.find()
.populate(
"companyId",
"name"
)
.sort(sortQuery);

res.status(200).json({
success:true,
jobs
});

}catch(error){

res.status(500).json({
message:error.message
});

}

};

module.exports = {
createJob,
getJobs,
getMyJobs,
deleteJob,
searchJobs,
filterJobs,
sortJobs
};