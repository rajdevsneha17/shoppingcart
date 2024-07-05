const express=require("express")
const app=express()
const PORT=process.env.PORT||7000
const cors = require('cors');
const corsOptions = {
    origin: 'https://shoppingcart-fss.vercel.app',
    credentials:false,
    optionsSuccessStatus: 200, // For legacy browser support,
    
  };
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));
  // Handle preflight requests for all routes
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://shoppingcart-fss.vercel.app');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.sendStatus(200);
  });

// app.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingcart-fss.vercel.app');
//    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     if (req.method === 'OPTIONS') {
//         // Handle preflight requests
//         res.setHeader('Access-Control-Allow-Origin', 'https://shoppingcart-fss.vercel.app');
//         return res.sendStatus(200);
//     }
//     next();
// });
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