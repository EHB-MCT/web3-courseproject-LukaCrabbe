import './App.scss';
import Question from './Question/question.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Host from './Host/host.js';
import Join from './Join/join.js';
import Home from './Home/home.js';
import Nickname from './Nickname/nickname.js';

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route path="/host">
            <Host/>
          </Route>
          <Route path="/nickname">
            <Nickname/>
          </Route>
          <Route path="/join">
            <Join/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/question">
            
          </Route>

        </Switch>
      </div>
      <Question question="What is the capital of Belgium?" choices={["brussels","paris","london"]}
            correctAnswer={0} time={40}/>
    </Router>
  );


}

export default App;
