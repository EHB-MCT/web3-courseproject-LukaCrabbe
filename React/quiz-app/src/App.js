import logo from './logo.svg';
import './App.scss';
import Question from './question.js';

function App() {
  return (
    <div>
      <Question question="What is the capital of Belgium?" choices={["brussels","paris","london"]}
        correctAnswer={0} time={40}
      />
    </div>
  );
}

export default App;
