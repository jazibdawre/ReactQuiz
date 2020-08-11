import React, { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
import Details from './components/DetailsComponent';
import Quiz from './components/QuizComponent';

function App() {
  const [page, setPage] = useState("home");
  const [score, setScore] = useState(0);

  function renderPage() {
    if (page=="home") {
      return(
        <Home setPage={setPage}/>
      );
    } else if (page=="details") {
      return(
        <Details setPage={setPage}/>
      );
    } else if (page=="quiz") {
      return(
        <Quiz setPage={setPage} setScore={setScore}/>
      );
    } else
      return(
        <div>Error 404 Page Not Found</div>
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
