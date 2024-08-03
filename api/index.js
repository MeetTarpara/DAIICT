import express from 'express';
import mongoose  from 'mongoose';


import dotenv from 'dotenv';
import userRouter from './routes/user_routes.js';
import authRouter from './routes/auth_route.js';
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log(err);
    });

const app= express();
app.use(express.json());

// app.use(bodyParser.json());


app.listen(3000,() => {
    console.log('Server is running on port 3000');
} )

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);


//use middeleware for error hendaling

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});
