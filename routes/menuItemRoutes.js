const express = require("express");
const menuItem = require("../models/menuItem");
const router = express.Router();

//post method for menu item

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newItems = new menuItem(data);

    const response = await newItems.save();
    console.log("items save");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

//get method to get menu item

router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();
    console.log("Item fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste == "spicy" || taste == "sour" || taste == "sweet") {
      const response = await menuItem.find({ taste:taste });
      console.log("Response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid type" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});


//update menu item

router.put("/:id", async(req,res)=>{
  try {
    const menuId = req.params.id;
    const updatedMenu = req.body;

    const response = await menuItem.findByIdAndUpdate(menuId, updatedMenu, {
      new: true,
      runValidators:true,
    })

    if(!response){
      res.status(404).json({error:"menu item not found"})
    }

    res.status(200).json("item updated")
    
  } catch (error) {
    console.log(error)
    res.status(500).json({error:"internal server error"})
    
  }
})

//delete menu items

router.delete("/:id", async(req,res)=>{
  try {
    const menuId = req.params.id;
    const response = await menuItem.findByIdAndDelete(menuId)

    if(!response){
      res.status(404).json({error:"item not found"})
    }
    res.status(200).json("Item deleted successfully")
    
  } catch (error) {
    console.log(error)
    res.status(500).json({error:"internal server error"})
  }
})


module.exports = router;
