// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { ContextProvider } from "./context/Context_Provider";
import Product from './pages/Product';
import { useCtx } from './context/UseContext';


function Home() {
  const { handleRedirect } = useCtx();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleRedirect("/product")}>Go to product Page</button>
      </header>
    </div>
  );
}

function App() {

  return (
    <div className="main-app">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;

