import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

function Home(props) {
  return(
    <Jumbotron>
      <h1 className="display-3">Hello Visitor!</h1>
      <p className="lead">This is a Quiz game made in React</p>
      <Button  className="my-3" color="success" onClick={() => props.setPage("details")}>Play the Game!</Button>
      <hr className="mt-5 mb-2" />
      <p>Note: You will be asked to fill in your details before proceeding</p>
    </Jumbotron>
  );
};

export default Home;
