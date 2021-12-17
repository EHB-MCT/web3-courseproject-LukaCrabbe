import './ui.scss';
import React from 'react';
import Draggable from 'react-draggable';

class UI extends React.Component{

    constructor(props){
        super(props);
        this.state={

        };
    }

    handleDrag(e){
    }

    render(){
        return(
                <Draggable
                 grid={[25,25]}
                 onDrag={(e)=>this.handleDrag(e)}
                 >
                    <div className="card">
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>                    
                </Draggable>
        );
    }

}

export default UI
