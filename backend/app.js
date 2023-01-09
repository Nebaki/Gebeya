const  express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const errorMiddlewares=require("./middleware/errors");
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
const products=require("./routes/product")
const auth=require("./routes/auth")
const order=require('./routes/order')

app.use("/api/v1",products);
app.use("/api/v1",auth);
app.use("/api/v1",order);


//middleware to handle errors
app.use(errorMiddlewares);
module.exports=app;
