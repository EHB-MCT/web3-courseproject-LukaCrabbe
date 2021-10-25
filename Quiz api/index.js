require('dotenv').config();
const express=require('express');
const app=express();
const {MongoClient}=require('mongodb');
const PORT=8000;
const uri = process.env.MONGOURI;
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.send("Hello World");
});

app.get('/questions',function(req,res){

    let questions = {
        question:"What is the capital of Belgium ?",
        choices:["Brussels","Paris","London"],
    };

    res.json(questions);

});

app.post('/lobby',function(req,res){
    let json="";
    for(const prop in req.body){
        json=JSON.parse(prop);
    }     
    const collection = mongoClient.db("Quiz-App").collection("lobbies");
         console.log(collection);
         collection.insertOne({
             hostNickname:json.nickname,
             amountOfQuestions:json.amountOfQuestions,
             questionTime:json.questionTime,
             maxPlayers:json.amountOfPlayers,
             players:[]
         });
    res.send(req.body);
});

app.listen(PORT,()=>{
    mongoClient.connect(err => {
        if (err) {
            throw err;
        }
        console.log("connection to database");

    });
});



