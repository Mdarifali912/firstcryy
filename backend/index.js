const express = require("express")
const app= express()
const cors = require("cors")

const { connection } = require("./config/db")
const { userRouter }=require("./routes/user.route")

require("dotenv").config()
app.use(express.json())

app.use(cors())


app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("hwww")
})




app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)

    }
    console.log(`server has running port ${process.env.port}`)
})
