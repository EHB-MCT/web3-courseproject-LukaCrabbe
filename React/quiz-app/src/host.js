import React from "react";
import {Link,Redirect} from 'react-router-dom';

class Host extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            nickname:"",
            amountOfQuestions:"",
            questionTime:"",
            amountOfPlayers:""
        };
    }

    handleChange(e){
         switch (e.target.id) {
             case "nickname":
                this.setState({
                    nickname:e.target.value
                });
                 break;
             case "question":
                 this.setState({
                     amountOfQuestions:e.target.value
                 });
                 break;
             case "timePerQuestion":
                    this.setState({
                        questionTime:e.target.value
                    });
                 break;   
             case "players":
                    this.setState({
                        amountOfPlayers:e.target.value
                    });
                break;     
             default:
                 break;
         }
    }

    handleSubmit(e){
        e.preventDefault();

        let data={
            nickname:this.state.nickname,
            amountOfQuestions:this.state.amountOfQuestions,
            questionTime:this.state.questionTime,
            amountOfPlayers:this.state.amountOfPlayers
        };

        let url = "http://127.0.0.1:8000/lobby";

        console.log(data);

        fetch(url,{
            method:'POST',
            mode:'no-cors',
            credentials:"same-origin",
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:JSON.stringify(data)
        });
    }

    render(){
        return(
            <div>
                <h1>Create a game</h1>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <label htmlFor="nickname">Your nickname</label>
                    <br></br>
                    <input type="text" id="nickname" onChange={(e)=>this.handleChange(e)}></input>
                    <br></br>
                    <label htmlFor="question">How many Questions</label>
                    <br></br>
                    <input type="number" id="question" onChange={(e)=>this.handleChange(e)}></input>
                    <br></br>
                    <label htmlFor="timePerQuestion">Time for each question</label>
                    <br></br>
                    <input type="number" id="timePerQuestion" onChange={(e)=>this.handleChange(e)}></input>
                    <br></br>
                    <label htmlFor="players">Amount of players</label>
                    <br></br>                
                    <input type="number" id="players" onChange={(e)=>this.handleChange(e)}></input>  
                    <input type="submit" value="Create game"></input>              
                </form>            
                <button><Link to="/">Go Back</Link></button>
            </div>
        );
    }


}

export default Host;