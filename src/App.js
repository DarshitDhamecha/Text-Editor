import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About'
import Alert from './component/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggelMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#120a51';
      showAlert("Dark mode is On", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is On", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Logo" mode={mode} toggelMode={toggelMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* router is start */}
          <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} hedding="Enter The Text" mode={mode} />} />
            <Route path='/About' element={<About mode={mode} />} />
          </Routes>
          {/* router is over */}

        </div >
      </BrowserRouter>
    </>
  );
}

export default App;