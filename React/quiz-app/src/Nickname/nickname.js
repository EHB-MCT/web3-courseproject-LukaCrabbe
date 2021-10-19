import React from 'react';
import {Link,Redirect,useLocation,useHistory} from 'react-router-dom';

class Nickname extends React.Component{

    constructor(props){
        super(props);
        this.state={
            submitted:false,
            nickname:""
        };
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(e.target);
        this.setState({
            submitted:true,
        });
        sessionStorage.setItem("nickname",this.state.nickname);
    }

    handleChange(e){
        console.log(e.target.value);
        this.setState({
            nickname:e.target.value
        });
    }

    render(){
        return(
            <div>
                <h1>Choose a nickname</h1>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type="text" placeholder="Nickname" onChange={(e)=>this.handleChange(e)}></input>
                    <input type="submit" value="Submit"></input>
                </form>
                {this.state.submitted && 
                <Redirect to="/join"/>
                }
                <button>Go Back</button>
            </div>
            );
    }



}

export default Nickname;