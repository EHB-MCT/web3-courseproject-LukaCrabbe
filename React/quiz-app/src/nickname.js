import {Link,Redirect} from 'react-router-dom';

function Nickname(props){

    return(
    <div>
        {console.log(this.props.location.state.referrer)}
        <h1>Choose a nickname</h1>
        <form onSubmit={<Redirect/>}>
            <input type="text" placeholder="Nickname"></input>
            <input type="submit" value="Submit"></input>
        </form>
        <button>Go Back</button>
    </div>
    );
}

export default Nickname;