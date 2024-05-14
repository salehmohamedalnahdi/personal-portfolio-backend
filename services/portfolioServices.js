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

module.exports = {
  getUsersWithAchievements
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