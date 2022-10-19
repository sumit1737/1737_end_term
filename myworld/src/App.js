import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nvbar from './components/Navbar/Nvbar';
import Login from './pages/Login';
import Crud from './pages/Crud';
import api from './api/data';
import { useState } from 'react';
import Edit from './pages/Edit';
import Upload from './pages/Upload';


function App() {
  if(localStorage.getItem("isLoggedIn") == null){
    localStorage.setItem("isLoggedIn","false");
  }

  if(localStorage.getItem("loggedInUser") == null){
    localStorage.setItem("loggedInUser","null");
  }

  function setLogin(){
    if(localStorage.getItem("isLoggedIn") === "false")return false;
    return true;
  }


  let [loginState,setLoginState] = useState(setLogin());
  let [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("loggedInUser"));


  function logIn(toLogIn,userId="null"){
    setLoginState(toLogIn);

    console.log("current state ",toLogIn);
    if(toLogIn){
      setLoggedInUser(`${userId}`);
      localStorage.setItem("isLoggedIn","true");
      localStorage.setItem("loggedInUser",`${userId}`);
    }
    else{
      setLoggedInUser("null");
      localStorage.setItem("isLoggedIn","false");
      localStorage.setItem("loggedInUser","null");
    }
    
  }


  // read data
  async function readData(){
    const res = await api.get("/data");
    return res.data;
  }

  let routeObj = {
    home :  {link: "/", ele: <Home userLoggedIn={loggedInUser} isLoggedIn={loginState} /> },
    about : {link: "/about", ele: <About /> },
    contact : {link: "/contact", ele: <Contact /> },
    login : {link: "/login", ele:<Login userLoggedIn={loggedInUser} isLoggedIn={loginState} hasAccount={true} dataPass={readData} toggleLogIn={logIn}/>},
    signin : {link: "/signin", ele:<Login userLoggedIn={loggedInUser} isLoggedIn={loginState} hasAccount={false} dataPass={readData} toggleLogIn={logIn}/>},
    crud : {link: "/crud", ele:<Crud userLoggedIn={loggedInUser} isLoggedIn={loginState}/>},
    upload: {link: "/upload", ele:<Upload userLoggedIn={loggedInUser} isLoggedIn={loginState} />},
    edit: {link: "/edit/:id", ele:<Edit userLoggedIn={loggedInUser} isLoggedIn={loginState} hasAccount={false} dataPass={readData} />}
  }

  return (
    <div className='base-div-siri'>
      <Nvbar home={ routeObj.home } 
      about={ routeObj.about } 
      contact={ routeObj.contact } 
      login={ routeObj.login }
      signin={ routeObj.signin }
      crud={ routeObj.crud }
      upload={ routeObj.upload }
      edit={ routeObj.edit }
      isLoggedIn={loginState}
      userLoggedIn={loggedInUser}
      toggleLogIn={logIn}

      />
    </div>
  );
}

export default App;
