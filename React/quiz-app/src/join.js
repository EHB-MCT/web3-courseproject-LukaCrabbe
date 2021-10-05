import {Link,Redirect} from 'react-router-dom';


function Join(props){

    


    return(          
        <div>
            {window.sessionStorage.length===0 && 
                <Redirect to={{pathname:"/nickname",state:{referrer:"/join"}}}/>
            }
            <h1>Paste a game link to join</h1>
            <form>
                <input type="text" placeholder="link"></input>
                <input type="submit" value="Join"></input>
            </form>
            <button><Link to="/">Go Back</Link></button>
        </div>
    );
}

export default Join;