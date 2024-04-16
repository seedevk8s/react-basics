import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Welcome2';
import Welcome3 from './components/Welcome3';
import Goodbye from './components/Goodbye';

function App() {
  return (
    <div className="App">
      <h1>Hello World KOSTA!</h1>
      <Welcome />
      <Welcome />
      <Greeting />
      <Welcome3 name="hojin" />
      <Goodbye />
      <Goodbye name="chu" />
    </div>
  );
}

export default App;
