const express=require('express');
const {ExpressPeerServer}=require('peer');
const app=express();
const {MongoClient}=require('mongodb');
const PORT=8000;
const uri = "mongodb+srv://lukacrabbe:KE-f4$ZNP3j8Z_D@cluster0.rglrf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const customGenerationFunction = () => (Math.random().toString(36) + '0000000000000000000').substr(2, 16);

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

const server=app.listen(PORT,()=>{
    mongoClient.connect(err => {
        if (err) {
            throw err;
        }
        console.log("connection to database");

    });
});


const peerServer = ExpressPeerServer(server, {
    path: '/myapp',
    proxied:true,
    generateClientId: customGenerationFunction,
  });
  
app.use('/peerjs', peerServer);

peerServer.on('connection',(client)=>{
    console.log(client);
    console.log("Hello");
});


