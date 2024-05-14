const express= require('express')
const app= express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const portfolioRoutes=require('./routes/portfolioRoute.js')


app.use('/',portfolioRoutes)

app.listen(3000,()=>console.log("connecting is done"))








/* app.post('/', async (req, res) => {
  try {
    const { name, email, age,create, title,content} = req.body;
    const newPortfolio = await prisma.user.create({
      data: {
        name,
        email,
        age,
        achievements: {
          create: {
            title,
            content,
          },
        },
      },
      include: {
        achievements: true,
      },
    });
    res.json(newPortfolio);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user.' });
  }
});*/

/* {
"name": "Omer Saeed",
"email": "omer@example.com",
"age": 30,
"title": " Petroleum Equipment Engineer",
"content": "Developed and implemented quality control processes to ensure the reliability and performance of petroleum equipment."
}*/



/* try {
    const newPortfolio = await prisma.user.create({
      data: req.body 
    });
    res.json(newPortfolio);
  } catch (error) {
    console.error('Error Creating:', error);
    res.status(500).json({ error: 'Failed To Create .' });
  }
});*/

/* {
"name": "ali Saleh",
"email": "ali@example.com",
"age": 25,
"achievements":{ "create": [
{
"title": " Petroleum Equipment Engineer",
"content": "Played a key role in troubleshooting and resolving critical equipment failures, minimizing production losses."
},
{
"title": "Quality Manager:",
"content":"Implemented effective communication strategies to foster collaboration and improve team performance."
}
]
}
}*/


