import logo from './logo.svg';
import './App.css';
import Student from './Student';
import Countstate from './Countstate';
import Counteffect from './Counteffect';


import Fun from './Components/Fun';
import Cla from './Components/Cla';
import Using from './Using';
import Parent from './Parent';





function App() {
  return (
    <div className="App">
      <Student name = "Yashi"/>
      <Countstate/>
      <Counteffect/>
      <Parent/>
      
     <Fun/>
     <Cla/>
     
    
     
    </div>
  );
}

export default App;
