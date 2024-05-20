// userService.js

const {PrismaClient}=require ('@prisma/client');
const prisma=new PrismaClient();

async function getUsersWithAchievements(userId) {
    const users = await prisma.user.findMany({
      where: { id: userId },
      include: { achievements: true} 
    })
    return users;  
}

async function addPortfolio(requestBody){
  const newPortfolio = await prisma.user.create({
    data: {
      name:requestBody.name,
      email:requestBody.email,
      age:requestBody.age,
      achievements: {
        create: {
          title:requestBody.title,
          content:requestBody.content
          //userEmail:email,
        },
      },
    },
    include: {
      achievements: true,
    },
  });
  return(newPortfolio);
}

async function check(requestBody) {
  const checkUser=await prisma.user.findUnique({
    where: { email: requestBody.email }
  })
  return checkUser;
}

async function deleteaPortfolio(requestBody){
  await prisma.achievement.deleteMany({
    where: { userEmail: requestBody.email }
   });
   const deleteUser=await prisma.user.delete({ 
    where: { email: requestBody.email }
  });
  return deleteUser;
}

async function updatePortfolio(requestBody) {
  await prisma.user.updateMany({
    where: { email: requestBody.email },
    data:{
      name:requestBody.name,
      age:requestBody.age,
    },
  });
  await prisma.achievement.updateMany({
    where: { userEmail: requestBody.email },
    data:{
      title: requestBody.title,
      content: requestBody.content,
    }
  })
}

module.exports = {
  getUsersWithAchievements,
  addPortfolio,
  check,
  deleteaPortfolio,
  updatePortfolio,
};

/* async function getUsersWithAchievements(userId) {
  try {
    const users = await prisma.user.findMany({
      where: { id: userId },
      include: { achievements: true }
    });
    return users;
  } catch (error) {
    console.error('Error displaying portfolio:', error);
    throw new Error('Failed to display portfolio.');
  }
}*/

/*async function deletePortfolio(req,res) {
 try {
  const {email}=req.body
  try {
    const checkUser=await prisma.user.findMany({
      where: { email: email }
    })
  } catch (error) {
    console.error('Error in checkUser controller:', error);
     res.json({ error: 'email is not exsisted' });
  }
  const deleteaAhievement=await prisma.achievement.deleteMany({
    where: { userEmail: email }
   });
  const deleteUser=await prisma.user.delete({ 
    where: { email: email }
  });
  res.json(deleteUser)
}
  catch (error) {
  console.error('Error in user controller:', error);
    res.json({ error: 'Failed to delete portfolio.' });
 }
}*/

/*async function updatePortfolio(req,res) {
  try {
   const {name, email, age ,title,content}=req.body
   try {
    const checkUser=await prisma.user.findMany({
      where: { email: email }
     })
   } catch (error) {
    console.error('Error in checkUser controller:', error);
    res.json({ error: 'email is not exsisted' });
   }
   const updateUser=await prisma.user.updateMany({
    where: { email: email },
    data:{
      name,
      age,
    },
  });
  const updateachievement=await prisma.achievement.updateMany({
   where: { userEmail: email },
   data:{
     title,
     content,
   }
 })
 res.json({message:"updateed is done"})
}
  catch (error) {
  console.error('Error in user controller:', error);
    res.status(500).json({ error: 'Failed to Update portfolio.' });
 }
}*/