const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', async (req, res)=>{
    console.log('hello world');
    res.json("hello world");
});


app.post('/', async (req, res)=>{
     let data =  req.body.userMed;
      res.send(data)
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
   console.log(`Server running @ port ${port}`) 
})


