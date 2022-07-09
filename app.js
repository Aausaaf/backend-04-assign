const express = require('express')

const app = express()

app.use(express.json())

//app.post("/user",)
let data = []
function validetor(req,res){
    let body = req.body

    if(body.firstname == undefined)
    {
        res.status(400).send("Please Fill First name")
    }
    if(body.lastname == undefined)
    {
        res.status(400).send("plese Fill last name")
    }
    if(body.email == undefined)
    {
        res.status(400).send("plese Fill Email")
        
    }
    if(body.pincode == undefined || body.pincode < 100000 || body.pincode > 999999)
    {
        res.status(400).send("plese Fiil right Pin code")

    }
    if(body.age == undefined || body.age < 1 || body.age > 80)
    {
        res.status(400).send("plese Fiil right age")

    } 
    if(body.gender != "Male" || body.gender != "Female")
    {
        res.status(400).send("plese Fiil right gender")   
    }
    res.status(200).send("Successfull")
  data.push(body)
}

app.post("/user",validetor)


app.listen(3000)