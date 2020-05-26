import React, { Component } from "react";
import { LocalForm, Control } from "react-redux-form";
import { Row, Label, Col, Button } from "reactstrap";

class ContactForm extends Component {
  render() {
    return (
      <LocalForm onSubmit={(values) => this.props.submit(values)}>
        <Row className="form-group">
          <Col md={2}>
            <Label htmlFor="firstname">First Name</Label>
          </Col>
          <Col md={10}>
            <Control.text
              id="firstname"
              model=".firstName"
              placeholder="First Name"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={2}>
            <Label htmlFor="lastname">Last Name</Label>
          </Col>
          <Col md={10}>
            <Control.text
              id="lastname"
              model=".lastName"
              placeholder="Last Name"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={2}>
            <Label htmlFor="email">Email</Label>
          </Col>
          <Col md={10}>
            <Control.text
              id="email"
              model=".Email"
              placeholder="Email"
              className="form-control"
            />
          </Col>
        </Row>
        <Row>
          <Button type="submit" color="primary" className="form-control">
            Submit
          </Button>
        </Row>
      </LocalForm>
    );
  }
}

export default ContactForm;
