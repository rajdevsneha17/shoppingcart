const express=require("express")
const app=express()
const PORT=process.env.PORT||7000
const cors = require('cors');
app.use(cors({
    origin: ['https://shoppingcart-fss.vercel.app'], // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
credentials:true
}));
app.use(express.json())

const routes=require("./routes/sendmail")
app.use("/api/v1",routes)

app.listen(PORT,()=>{
console.log(`successfully chal reha at ${PORT}`)
})

const dbconnect=require("./config/database")
dbconnect();

app.get("/",(req,res)=>{
    res.send("running")
})