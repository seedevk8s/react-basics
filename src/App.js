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
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import Student from './components/Student';
import Student2 from './components/Student2';
import Student3 from './components/Student3';
import Student4 from './components/Student4';
import Student5 from './components/Student5';
import Student6 from './components/Student6';

function App() {

  const skills = ['HTML5 ', 'CSS ', 'JavaScript']

  const student = {
    firstName: "les3",
    lastName: "vag3",
    email: "les3@gmail.com"
  }


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
      <HelloWorld />
      <HelloWorld2 />
      <HelloWorld3 />
      <HelloWorld4 />
      <Student />
      <Student2 
        firstName = "les"
        lastName = "vag"
        email = "les@gmail.com"
      />
      <Student2 
        firstName = "les2"
        lastName = "vag2"
        email = "les2@gmail.com"
      />
      <Student3 
        student = {student}
      />
      <Student4 
        data = {skills}
      />
      <Student5 
         firstName = "les5"
         lastName = "vag5"
         email = "les5@gmail.com"       
      />
      <Student6 
         firstName = "les6"
         lastName = "vag6"
         email = "les6@gmail.com"             
      />
    </div>
  );
}

export default App;
