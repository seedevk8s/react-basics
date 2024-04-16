import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Welcome2';
import Welcome3 from './components/Welcome3';
import Goodbye from './components/Goodbye';
// import { FirstComponent, SecondComponent } from './components/MyComponent';
// import { FirstComponent as FC, SecondComponent } from './components/MyComponent';
import { FirstComponent as FC, SecondComponent as SC } from './components/MyComponent';
// import MyComponent from './components/MyComponent';
import MC from './components/MyComponent';

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
      {/* <FirstComponent /> */}
      <FC />
      {/* <SecondComponent /> */}
      <SC />
      {/* <MyComponent /> */}
      <MC />
    </div>
  );
}

export default App;
