const express= require('express')
const router = express.Router();
const {getUsers}=require('../controller/portfolioControllers.js')

router.get("/users",getUsers)
/*router.get('/achievements',)
router.post('/create',);
router.delete('/achievements/:Id',)
router.delete('/users/:userId',);*/


module.exports = router;

