const Artisan = require("../models/artisanSchema")

//create an artisan
const createArtisan = (req, res) =>{
    const newArtisan = new Artisan({
      name: req.body.name,
      work: req.body.work,
      yearsofexperience: req.body.yearsofexperience,
      location: req.body.location,
    });
    newArtisan.save()
    res.status(2000).json(newArtisan)
}
//get all Artisan
const getArtisans =async(req, res) =>{
    const artisans = await Artisan.find();
    res.status(200).json(artisans)
}

module.exports={createArtisan, getArtisans}