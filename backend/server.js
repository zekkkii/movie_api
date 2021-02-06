import Express from "express"
import Sequelize from "sequelize"
import {db} from "./db/db"
import {movies} from "./db/models/peliculas"

const app=Express()

app.use(Express.json()); 
    

app.get("/",(req,res)=>{
  res.send("Try to get 'localhost/api'")
})

app.get("/api",async(req,res)=>{

  const data = await movies.findAll()
  res.status(200).json({data})
})

app.listen(process.env.PORT || 3000,async()=>{
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } 
  catch {
      console.error('Unable to connect to the database');
    }

  console.log("runnig on port 3000")
})