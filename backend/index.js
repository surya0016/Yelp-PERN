require('dotenv').config();
const express = require('express');
const cors = require('cors');
const z = require('zod');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

db.connect();

//Get all restaurants
app.get('/api/v1/restaurants', async(req,res)=>{
    try {
        const data = await db.query("SELECT * FROM restaurants;");
        res.json({
            data:data.rows
        }) 
    } catch (error) {
        console.log(error);
    }
    
})

//Get a specific restaurant
app.get('/api/v1/restaurants/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await db.query("SELECT name, location, price_range FROM restaurants WHERE id = $1;",[id])
        res.json({data:data.rows})
    } catch (error) {
        console.log(error);
    }
    
})

//Post restaurants
app.post('/api/v1/restaurants', async(req,res)=>{

    try {
        const {name} = req.body;
        const {location} = req.body;
        const {price_range} = req.body;

        const zodSchema = z.object({
            name:z.string().trim().min(1, {message:"name is invalid"}),
            location:z.string().trim().min(1, {message: "location is invalid"}),
            price_range:z.number().min(1).max(5, {message: "price range is invalid"})
        })

        const response = zodSchema.safeParse({name, location, price_range});
    

        if(!response.success){
            const messages = response.error.issues;
            const f = messages.map(msg=> msg.message)
            res.status(404).json({
                msg:f,
                success:response.success
            })
            return;
        }

        const data = db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3);",[name, location, price_range])
        res.json({
            success:response.success,
            data:data,
    })
    } catch (error) {
        console.log(error);
    }
})

//Update a restaurant
app.put('/api/v1/restaurants/:id', async(req,res)=>{

    try {
        const {id} = req.params;

        const {name} = req.body;
        const {location} = req.body;
        const {price_range} = req.body;
        
        await db.query("UPDATE restaurants SET name = $1, location = $2, price_range =$3 WHERE id = $4;",[name, location, price_range, id])
        res.json("Updated");
    } catch (error) {
        console.log(error);
    }
    

})

//Delete a restaurant
app.delete('/api/v1/restaurants/:id', async(req,res)=>{

    try {
        const {id} = req.params;

        await db.query("DELETE FROM restaurants WHERE id = $1",[id])
        res.json("Restaurant Deleted");

    } catch (error) {
        console.log(error);
    }
    
})


app.listen(PORT,()=>console.log(`Server is up and listening on port ${PORT}`));