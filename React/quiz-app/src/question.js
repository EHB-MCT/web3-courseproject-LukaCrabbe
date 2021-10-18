import './question.scss';
import React from 'react'; 
import Timer from './timer.js';

class Question extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show:false,
            choices:this.props.choices,
            correctAnswer:this.props.correctAnswer,
            submittedAnswer:false,
            answer:false,
            value:"",
        };
      }

     handleSubmit(e){
         e.preventDefault();     
         this.setState({
            show:!this.state.show,
            submittedAnswer:true,
         });
         if(this.state.value===this.state.choices[this.state.correctAnswer]){
            this.setState({
                answer:true
            });
         }
     }

     handleChange(e){
         this.setState({
             value:e.target.value
         });
     }

    render(){
        return(
            <div>
            <div className="question">
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <h1>{this.props.question}</h1>
                    {this.state.choices.map((choice)=>{
                        return(                            
                            <label htmlFor={choice} key={`${choice}Label`}>
                                <input type="radio" id={choice} name="choices" value={choice} key={choice}
                                onChange={(e)=>this.handleChange(e)}
                                >
                                </input>
                                {choice}                                
                            </label>
                        ) 
                    })}
                    <Timer time={this.props.time}/>                 
                    <input type="submit" value="Submit"></input>
                </form> 
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