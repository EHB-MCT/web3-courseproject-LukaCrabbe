import {Link} from 'react-router-dom';

function Home(props){
    return(
        <div className="login">
        <h1>Quiz app</h1>
        <button><Link to="/host">Host a game</Link></button>
        <button><Link to="/join">Join a game</Link></button>
      </div>
    );
}

export default Home;
