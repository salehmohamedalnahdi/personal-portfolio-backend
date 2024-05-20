const express= require('express')
const app= express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const portfolioRoutes=require('./routes/portfolioRoute.js')


app.use('/',portfolioRoutes)
app.listen(3000,()=>console.log("connecting is done"))






