import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
var questions = require("../data/questions.json");

class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentquestion: 1,
            totalquestions: 5,
            answers: [null, null, null, null, null]
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let answers = [...this.state.answers];
        answers[this.state.currentquestion-1] = event.target.value;
        this.setState({answers});
    }      

    handleSubmit() {
        var i=0;
        for (i=0; i<this.state.totalquestions; i++) {
            if(this.state.answers[i]===null) {
                alert('You have not answered all the questions!');
                break;
            }
        }
        if (i===this.state.totalquestions) {
            this.props.setScore(this.calculateScore());
            this.props.setPage("result");
        }
    }

    handleNext() {
        this.setState({ currentquestion: this.state.currentquestion+1});
    }

    handlePrev() {
        this.setState({ currentquestion: this.state.currentquestion-1});
    }

    calculateScore() {
        var score = 0;
        for (var i=0; i<this.state.totalquestions; i++) {
            if(this.state.answers[i]===questions.questions[i].ans) {
                score += 1;
            }
        }
        return score;
    }

    renderControls() {
        if(this.state.currentquestion===1) {
            return (
                <div>
                    <Button onClick={() => this.handleNext()}>Next</Button>
                </div>
            );
        } else if(this.state.currentquestion===this.state.totalquestions) {
            return (
                <div>
                    <Button onClick={() => this.handlePrev()}>Previous</Button>{'  '}
                    <Button onClick={() => this.handleSubmit()}>Submit</Button>
                </div>
            );
        } else {
            return (
                <div>
                    <Button onClick={() => this.handlePrev()}>Previous</Button>{'  '}
                    <Button onClick={() => this.handleNext()}>Next</Button>
                </div>
            );
        }
    }

    renderQuestion() {
        return(
            <Form>
                <div class="d-flex justify-content-between mb-3">
                    <Label for="title"><h2>Quiz Area</h2></Label>
                    <Label for="user"><h3>user:{' '}{this.props.name}</h3></Label>
                </div>
                <FormGroup>
                    <Label for="Questions"><h5>Q. {questions.questions[this.state.currentquestion-1].q}</h5></Label>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="answer" value="a" checked={this.state.answers[this.state.currentquestion-1] === "a"} onChange={this.handleChange}/>{' '}
                            {questions.questions[this.state.currentquestion-1].a}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="answer" value="b" checked={this.state.answers[this.state.currentquestion-1] === "b"} onChange={this.handleChange}/>{' '}
                            {questions.questions[this.state.currentquestion-1].b}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="answer" value="c" checked={this.state.answers[this.state.currentquestion-1] === "c"} onChange={this.handleChange}/>{' '}
                            {questions.questions[this.state.currentquestion-1].c}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="answer" value="d" checked={this.state.answers[this.state.currentquestion-1] === "d"} onChange={this.handleChange}/>{' '}
                            {questions.questions[this.state.currentquestion-1].d}
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
                  <div  className="col-lg-8 col-md-10 text-left mt-5 mx-auto">
                    {this.renderQuestion()}
                  </div>
                </div>
            </div>
        );
    }
}

export default Quiz;