import React from 'react';
import "./timer.scss";

class Timer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            time:this.props.time,
        };
    }

    componentDidMount(){
        this.timerId=setInterval(
           ()=>this.tick(),
           1000 
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    componentDidUpdate(){
        if(this.props.stop){
            clearInterval(this.timerId);
        }
    }

      tick(){
          this.setState({
              time:this.state.time-1
          });
          if(this.state.time<=0){
              clearInterval(this.timerId);
          }
      }


    render(){
        return (
        <h1 style={{color:this.state.time<=10 && "red"}}>{this.state.time}</h1>
        );
    }

}

export default Timer