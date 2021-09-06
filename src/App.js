import './App.css';
import GetUserComponent from './components/GetUserComponent';
import WelcomePage from './components/WelcomePage';
import {useState} from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")

  {console.log(userName)}
  return (
    <div className="App">
      <header className="App-header">
      {
      isLoggedIn ? <WelcomePage user = {userName} setIsLoggedIn={setIsLoggedIn}></WelcomePage> 
      : <GetUserComponent setUser = {setUserName} setIsLoggedIn={setIsLoggedIn}></GetUserComponent> 
      }
      </header>
    </div>
  );
}


export default App;
