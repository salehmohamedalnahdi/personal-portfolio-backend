const express= require('express')
const router = express.Router();
const controllerPortfolio=require('../controller/portfolioControllers.js')

router.get("/users",controllerPortfolio.getUsers)
router.post('/create',controllerPortfolio.createPortfolioCont);
router.delete("/delete",controllerPortfolio.deletePortfolioCont)
router.patch("/update",controllerPortfolio.updatePortfolioCont)

module.exports = router;

