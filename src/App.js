import React, { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
import Details from './components/DetailsComponent';
import Quiz from './components/QuizComponent';
import Result from './components/ResultComponent';

function App() {
  const [page, setPage] = useState("home");
  const [name, setName] = useState("Guest");
  const [score, setScore] = useState(0);

  function renderPage() {
    if (page==="home") {
      return(
        <Home setPage={setPage}/>
      );
    } else if (page==="details") {
      return(
        <Details setPage={setPage} setName={setName}/>
      );
    } else if (page==="quiz") {
      return(
        <Quiz name={name} setPage={setPage} setScore={setScore}/>
      );
    } else if (page==="result") {
      return(
        <Result name={name} score={score} setPage={setPage}/>
      );
    } else
      return(
      <div>Page not implemented. Route: {page}</div>
      );
  }

  return (
    <div className="App">
      <Navbar dark color="success">
        <div className="container">
          <NavbarBrand href="/"><h1>The Quiz Game</h1><h6>made for &lt; Unicode /&gt;</h6></NavbarBrand>
        </div>
      </Navbar>
      {renderPage()}
    </div>
  );
}

export default App;
