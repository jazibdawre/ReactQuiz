import React from 'react';
import { Button, Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Details(props) {
    return (
        <div className="col-lg-8 col-md-10 text-left mt-5 mx-auto">
          <Button className="btn-outline-warning mb-3" onClick={() => props.setPage("home")}>&lt;<small> Go Back</small></Button>
          <Form>
            <Label for="title"><h2>Participant Details</h2></Label>
            <FormGroup>
              <Label for="name">Full Name</Label>
              <Input type="text" name="name" id="name" placeholder="Full Name"/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="text" name="email" id="email" placeholder="someone@somewhere.com"/>
              <FormText>No I won't spam</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="collegename">College Name</Label>
              <Input type="text" name="collegename" id="collegename" placeholder="DJ Sanghvi College of Engineering"/>
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input type="text" name="city" id="city" placeholder="Mumbai"/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input type="text" name="state" id="state" placeholder="Maharashtra"/>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="zip">Zip</Label>
                  <Input type="text" name="zip" id="zip" placeholder="400058"/>
                </FormGroup>  
              </Col>
            </Row>
            <FormGroup className="mt-3" check>
              <Input type="checkbox" name="mailcheckbox" id="mailcheckbox"/>
              <Label for="mailcheckbox" check>Mail me a copy of my details and the score</Label>
            </FormGroup>
            <Button className="my-3" color="success" onClick={() => props.setPage("quiz")}>Lets Play!</Button>
          </Form>
        </div>
    );
};

export default Details;
