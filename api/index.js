import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';


import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRouter from './routes/auth_route.js';

import cookieParser from 'cookie-parser';
import powerRouter from './routes/power_route.js';

import exportRouter from './routes/export_route.js';

import userRouter from './routes/user_routes.js';

import listingRouter from './routes/listing_route.js';
import seedRouter from './routes/seed_route.js';
import fertilizerRouter from './routes/fertilizer_route.js';

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

app.use(cors({
    credentials : true,
}));
app.use(cookieParser());


// app.use(bodyParser.json());


app.listen(3000,() => {
    console.log('Server is running on port 3000');
} )

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing",listingRouter);
app.use("/api/subsidy/power",powerRouter);
app.use("/api/subsidy/export",exportRouter);
app.use("/api/subsidy/seed",seedRouter);
app.use("/api/subsidy/fertilizer",fertilizerRouter);







//use middeleware for error hendaling

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 560;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});
