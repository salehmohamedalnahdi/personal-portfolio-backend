// userController.js

const userService = require('../services/portfolioServices');

async function getUsers(req, res) {
  try {
    const userId = 1; // Set the desired user ID or retrieve it from the request
    const users = await userService.getUsersWithAchievements(userId);
    res.json(users);
  } catch (error) {
    console.error('Error in user controller:', error);
    res.status(500).json({ error: 'Failed to display portfolio.' });
  }
}

module.exports = {
  getUsers
};