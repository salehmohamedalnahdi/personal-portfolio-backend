const service = require('../services/portfolioServices');

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
  try {
    const requestBody=req.body
    const newPortfolio=await service.addPortfolio(requestBody)
    res.json(newPortfolio);
  } catch (error) {
    console.error('Error in user controller:', error);
    res.status(500).json({ error: 'Failed to create portfolio.' });
  }
}

async function deletePortfolioCont(req,res) {
 try {
  const requestBody=req.body
  const checkUser= await service.check(requestBody)
  if(!checkUser){
    return res.json({ error: 'email is not exsisted' });
  }
 const deleteaPortfolio=await service.deleteaPortfolio(requestBody)
  res.json(deleteaPortfolio)
}
  catch (error) {
  console.error('Error in user controller:', error);
    res.json({ error: 'Failed to delete portfolio.' });
 }
}

async function updatePortfolioCont(req,res) {
  try {
   //the body must be as {name:, email:, age: ,title:,content:}
   const requestBody=req.body
   const checkUser= await service.check(requestBody)
   if(!checkUser){
     return res.json({ error: 'email is not exsisted' });
   }
   await service.updatePortfolio(requestBody)
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

