
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import Date from './components/DateTime/DateTime';

function App() {
  return (
    <div className="App">
      <h1>My Daily Tasks</h1>
      <Date />
      <TaskInput />
    </div>
  );
}

export default App;
