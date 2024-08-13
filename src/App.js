import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Route, Routes , Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success")
      document.title = "TetUtils - Dark Mode"
    } else {
      setMode('light');
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  }


  return (
    <>
      {/* <Router> */}
      {/* <nav>
          
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
        </nav> */}

        <Navbar title="Textutils" text="About us" mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
                                   
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text" />} /> */}
            <TextForm showAlert={showAlert} heading="Enter text" />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
