const express=require('express')
port=5000
const app=express()

app.use(express.json())
items=[
    {
        name:"Madhu Kunchala",
        role:"Junior developer"
    },
    {
        name:"Raaja",
        role:"senior developer"
    },
    {
      name:"durgesh",
      role:"designer"

    },{
        name:"vikram",
        role:"analyst"
    },{
        name:"vishwa",
        role:"designer"
    },
    {
        name:"srikanth",
        role:"teamlead"
    },
    {
        name:"nothing",
        role:"t"
    }
]
app.get('/api/data',(req,res)=>{
    res.json(items)
})




app.listen(port,()=>{
    console.log("your server is running on",port)
})
