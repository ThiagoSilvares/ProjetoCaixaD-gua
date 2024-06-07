const express = require("express");
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({ email: email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }

    }
    catch{
        res.json("notexist")

    }
})

app.get("/register",cors(),(req,res)=>{

})

app.post("/register",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({ email: email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await collection.insertMany([data])
        }

    }
    catch{
        res.json("notexist")

    }
})

app.listen(8000,()=>{
    console.log("port connected");
})