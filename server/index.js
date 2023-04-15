const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl =
  "mongodb+srv://Technocolabs:Technocolabs123@joobs.okuzrmx.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(5002, () => {
  console.log("Server is running on port 5002");
});

app.post("/post", async (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  console.log(data)
});

 require("./jobs");
 const jobsDetails = mongoose.model("jobListings")


app.post("/jobListings",async(req,res)=>{
    const {title,minsal,maxsal,description,hiringcompany,email,phnumber,address,image}=req.body;
    try {
      await jobsDetails.create({
        image:image,
        title:title,
        minsal:minsal,
        maxsal:maxsal,
        description:description,
        hiringcompany:hiringcompany,
        email:email,
        phnumber:phnumber,
        address:address
      })
      res.send({status:"ok"})
    } catch (error) {
      console.log(error)
    }
  })

  app.get("/getAllJobs",async(req,res)=>{
    try {
        const allJobs =await jobsDetails.find({});
        res.send({status:"ok",data:allJobs});
    } catch (error) {
        console.log(error)
    }
})
  