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
        res.json(error);
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
        res.json(error);
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

        const data = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING * ",[name, location, price_range])
        
        res.json({
            msg:"Added new Restaurant",
            status:response.success,
            data:data.rows,
        })
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

//Update a restaurant
app.put('/api/v1/restaurants/:id', async(req,res)=>{

    try {
        const {id} = req.params;

        const {name} = req.body;
        const {location} = req.body;
        const {price_range} = req.body;
        
        const data = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range =$3 WHERE id = $4 RETURNING *;",[name, location, price_range, id])
        res.json({
            msg:"Updated Restaurant",
            status:"success",
            data:data.rows,
        });
    } catch (error) {
        console.log(error);
        res.json(error);
    }
    

})

//Delete a restaurant
app.delete('/api/v1/restaurants/:id', async(req,res)=>{

    try {
        const {id} = req.params;
        await db.query("DELETE FROM reviews WHERE restaurant_id=$1",[id])
        const data = await db.query("DELETE FROM restaurants WHERE id = $1 RETURNING *",[id])
        res.json({
            msg:"Removed Restaurant",
            status:"success",
            data:data.rows,
        });

    } catch (error) {
        console.log(error);
        res.json(error);
    }
    
})

app.get('/api/v1/review/:id',async(req,res)=>{

    try {
        const id = req.params.id;
        const data = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1",[id])
        const datarating = await db.query("SELECT rating FROM reviews WHERE restaurant_id = $1",[id])
        
        const arr = [];
        datarating.rows.map((rat)=>arr.push(rat.rating))
        const sum = arr.reduce((acc, curr)=> {return acc+curr}, 0);
        let avg = sum/arr.length;
        
        const ratingCheck = await db.query("SELECT id FROM reviews WHERE restaurant_id = $1",[id])
        
        if(ratingCheck.rows[0]){
            await db.query("UPDATE restaurants SET avg_rating=$1 WHERE id = $2;",[avg,id])
        }else{
            avg=0;
        }
        res.json({
            msg:"review for id "+id,
            data:data.rows,
            avg:avg,
            status:"success",
            r:(ratingCheck.rows[0] ? true : false),
            re:ratingCheck.rows
        }) 
    } catch (error) {
        console.log(error);
        res.json({error
        });
    }

    
})

app.get('/api/v1/review',async(req,res)=>{
    const data = await db.query("SELECT rating,restaurant_id FROM reviews")
    
    res.json({
        data:data.rows
    })
})

app.post('/api/v1/review/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const {review} = req.body;
        const {rating} = req.body;
        const {name} = req.body;

        const zodSchema = z.object({
            rating:z.number().min(1).max(5, {msg:"Number must be less than or equal to 5"})
        })

        const response = zodSchema.safeParse(req.body);

        if(!response.success){
            res.status(404).send({
                msg:response.error.issues[0].message
            })
        }else{
            const data = await db.query("INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *;",[id,name, review, rating]);
            
            res.json({
                msg:"added review for id "+req.params.id,
                data:data,
                status:"success"
            }) 
}
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})


app.listen(PORT,()=>console.log(`Server is up and listening on port ${PORT}`));