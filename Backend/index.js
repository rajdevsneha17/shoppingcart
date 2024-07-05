const express=require("express")
const app=express()
const PORT=process.env.PORT||7000
const cors = require('cors');
const corsOptions = {
    origin: 'https://shoppingcart-fss.vercel.app',
    optionsSuccessStatus: 200, // For legacy browser support,
    credentials:true
  };
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));

app.use((req, res, next) => {
    header('Access-Control-Allow-Origin', 'https://shoppingcart-fss.vercel.app');
    header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        // Handle preflight requests
        res.header('Access-Control-Allow-Origin', 'https://shoppingcart-fss.vercel.app');
        return res.sendStatus(200);
    }
    next();
});
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