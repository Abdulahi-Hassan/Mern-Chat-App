const express = require("express");
const { mongodb } = require("./config/config");
const CookieParser=require('cookie-parser')
const cors=require('cors');
require("dotenv").config();
const path=require('path')
const app = express();
app.use(express.json())
app.use(CookieParser())
app.use(cors({origin:"http://localhost:4000",credentials:true}));
app.use("/api/auth", require("./routes/Auth-Routes"));
app.use("/api", require("./routes/User-Routes"));
app.use("/api/message", require("./routes/Message-Routes"));
app.use(express.static(path.join(__dirname,"../frontend/dist")))
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend','dist','index.html'))
})
app.listen(process.env.PORT || 3000, mongodb(), () =>
  console.log("listening on port 3000")
);
