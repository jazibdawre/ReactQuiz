import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

function Result(props) {
  return(
    <Jumbotron>
        <h1 className="display-3">Congratulations {props.name}!</h1>
        <p className="lead">You scored {props.score} points</p>
        <Button  className="my-3" color="success" onClick={() => props.setPage("home")}>Return to Home</Button>
        <hr className="mt-5 mb-2" />
    </Jumbotron>
  );
};

export default Result;
