import {Link,Redirect} from 'react-router-dom';

function Host(props){
    return(
        <div>
            {window.sessionStorage.length===0 && 
                <Redirect to={{pathname:"/nickname"}}/>
            }
            <h1>Create a game</h1>
            <form>
                <label htmlFor="question">How many Questions</label>
                <br></br>
                <input type="number" id="question"></input>
                <br></br>
                <label htmlFor="timePerQuestion">Time for each question</label>
                <br></br>
                <input type="number" id="timePerQuestion"></input>
                <br></br>
                <label htmlFor="players">Amount of players</label>
                <br></br>                
                <input type="number" id="players"></input>                
            </form>            
            <button><Link to="/">Go Back</Link></button>
        </div>
    );
}

export default Host;