const express=require('express')
const app =express()
require('dotenv').config()
const newsroutes = require('./routes/topheadline')
const filterroutes=require('./routes/filters')


const PORT =process.env.PORT||8000

app.use(express.json())

app.use(newsroutes)

app.use(filterroutes)

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})