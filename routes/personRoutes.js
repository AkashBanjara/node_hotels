const express = require("express");
const Person = require("../models/person");
const router = express.Router();

//add person to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the req body contains the person data

    //create a new person document using the mongoose model
    const newPerson = new Person(data);

    //save the new person to the database
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// get method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched");

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

// get method to get person wia work

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //extract the work type form the url paremeter
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("Response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});


//update person value
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId,updatedPersonData,
      {
      new: true,
      runValidators: true,
      },
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});



//delete person value

router.delete("/:id", async(req,res)=>{
  try {
    const personId = req.params.id;  //Extract the person's Id for the url paremeter

    // assuming you have a person model

    const response = await Person.findByIdAndDelete(personId)
    if(!response){
      return res.status(404).json({error: "Person not found"})
    }

    console.log('Data updated')

    res.status(200).json({message: "Person deleted successfully"});
    
  } catch (error) {
    console.log(error)
    res.status(500).json({error:"internal server error"})
  }
})

module.exports = router;
