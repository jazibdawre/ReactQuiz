import React, { Component } from 'react';
import { Button, Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentquestion: 1,
            totalquestions: 5,
            totalanswers: 0,

        }    
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Answeres were submitted: ' + this.state.totalanswers);
        event.preventDefault();
    }

    handleNext() {
        this.setState({ currentquestion: this.state.currentquestion+1});
    }

    handlePrev() {
        this.setState({ currentquestion: this.state.currentquestion-1});
    }

    renderControls() {
        if(this.state.currentquestion==0) {
            return (
                <div>
                    <Button onClick={() => this.handleNext}>Next</Button>
                </div>
            );
        } else if(this.state.currentquestion==this.state.totalquestions) {
            return (
                <div>
                    <Button onClick={() => this.handlePrev}>Previous</Button>
                    <Button type="submit" value="Submit">Submit</Button>
                </div>
            );
        } else {
            return (
                <div>
                    <Button onClick={() => this.handlePrev}>Previous</Button>
                    <Button onClick={() => this.handleNext}>Next</Button>
                </div>
            );
        }
    }

    renderQuestion(question) {
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Option one is this and that—be sure to include why it's great
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Option two can be something else and selecting it will deselect option one
                        </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio1" disabled />{' '}
                            Option three is disabled
                        </Label>
                    </FormGroup>
                </FormGroup>
                {this.renderControls()}
            </Form>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderQuestion(this.state.currentquestion)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;