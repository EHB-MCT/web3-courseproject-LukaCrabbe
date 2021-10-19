import './question.scss';
import React from 'react'; 
import Timer from '../Timer/timer.js';

class Question extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show:false,
            choices:this.props.choices,
            correctAnswer:this.props.correctAnswer,
            submittedAnswer:false,
            answer:false,
            stopTimer:false,
            disableButton:false
        };
      }

      handleState(){
        this.setState({
            show:!this.state.show,
            submittedAnswer:true,
            stopTimer:true,
            disableButton:true
         });
      }

     handleClick(e){
         this.handleState();
         e.target.style.backgroundColor="red";
         e.target.style.color="black";
         if(e.target.value===this.state.choices[this.state.correctAnswer]){
             e.target.style.backgroundColor="green";
            this.setState({
                answer:true
            });
         }        
     }

    render(){
        return(
            <div>
            <div className="question">
                    <h1>{this.props.question}</h1>
                    {this.state.choices.map((choice)=>{
                        return(                            
                            <button id={choice} value={choice} key={choice} 
                            onClick={(e)=>this.handleClick(e)} disabled={this.state.disableButton}
                            >
                            {choice}
                            </button>
                        ) 
                    })}
                    <Timer time={this.props.time} stop={this.state.stopTimer}/>                 
            </div>
            {this.state.show &&
            <div className="answer">
                {this.state.answer ?
                <h1> Correct !</h1>:<h1>False</h1>
                }              
            </div>
            }
        </div>
        );
    } 
           
}

export default Question