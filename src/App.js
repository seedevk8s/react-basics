import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Welcome2';
import Welcome3 from './components/Welcome3';

function App() {
  return (
    <div className="App">
      <h1>Hello World KOSTA!</h1>
      <Welcome />
      <Welcome />
      <Greeting />
      <Welcome3 name="hojin" />
    </div>
  );
}

export default App;
