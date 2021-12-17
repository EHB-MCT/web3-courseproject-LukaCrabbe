import './canvas.scss';
import React from 'react';
import UI from './ui';

class Canvas extends React.Component{

    constructor(props){
        super(props);
        this.state={  
        };
    }

    handleMouseMove(e){
        // console.log(e.clientX,e.clientY);
    }

    render(){
        return(
            <div id="container" onMouseMove={(e)=>this.handleMouseMove(e)}>                    
                <UI></UI>
                <div className="dropzone"></div>
                <div className="dropzone"></div>
                <div className="dropzone"></div>
                <div className="dropzone"></div>
            </div>           
        );
    }


}

export default Canvas;