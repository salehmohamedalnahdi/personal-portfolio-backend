const service = require('../services/portfolioServices');
const schema=require("../validation/validationSchema")

async function getUsers(req, res) {
  try {
    const userId = 1; 
    const users = await service.getUsersWithAchievements(userId);
    res.json(users);
  } catch (error) {
    console.error('Error in user controller:', error);
    res.status(500).json({ error: 'Failed to display portfolio.' });
  }
}

async function createPortfolioCont(req,res){
  const createSchema=schema.createSchema()
  const {error,value}=createSchema.validate(req.body)
  if (error){
    return res.status(400).json({ error: error.details[0].message })
  }
  try {
    const newPortfolio=await service.addPortfolio(value)
    res.json(newPortfolio);
  } catch (error) {
    console.error('Error in user controller:', error);
    res.status(500).json({ error: 'Failed to create portfolio.' });
  }
}

async function deletePortfolioCont(req,res) {
  const createSchema=schema.updateAndDeleteSchema()
  const {error,value}=createSchema.validate(req.body)
  if (error){
    return res.status(400).json({ error: error.details[0].message })
  }

 try {
  const checkUser= await service.check(value)
  if(!checkUser){
    return res.json({ error: 'email is not exsisted' });
  }
 const deleteaPortfolio=await service.deleteaPortfolio(value)
  res.json(deleteaPortfolio)
}
  catch (error) {
  console.error('Error in user controller:', error);
    res.json({ error: 'Failed to delete portfolio.' });
 }
}

async function updatePortfolioCont(req,res) {
  const createSchema=schema.updateAndDeleteSchema()
  const {error,value}=createSchema.validate(req.body)
  if (error){
    return res.status(400).json({ error: error.details[0].message })
  }
  try {
   //the body must be as {name:, email:, age: ,title:,content:}
   const checkUser= await service.check(value)
   if(!checkUser){
     return res.json({ error: 'email is not exsisted' });
   }
   await service.updatePortfolio(value)
  res.json({message:"updateed is done"})
 }
   catch (error) {
   console.error('Error in user controller:', error);
     res.json({ error: 'Failed to Update portfolio.' });
  }
 }
module.exports = {
  getUsers,createPortfolioCont,deletePortfolioCont,updatePortfolioCont
};

