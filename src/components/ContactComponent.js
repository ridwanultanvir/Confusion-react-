import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Button,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      telnum: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        email: false,
        telnum: false,
      },
    };
  }

  handleInputChange(event) {
    const target = event.target;
    console.log(target);

    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert("current state is " + JSON.stringify(this.state));
  }

  handleBlur(name) {
    this.setState({ touched: { ...this.state.touched, [name]: true } });
  }

  validate(firstname, lastname, telnum, email) {
    const error = {
      firstname: "",
      lastname: "",
      email: "",
      telnum: "",
    };
    if (this.state.touched.firstname && firstname.length < 4) {
      error.firstname = "first name should be at least 4 charecters long";
    }

    if (this.state.touched.lastname && lastname.length < 4) {
      error.lastname = "Last name should be at least 4 charecters long";
    }

    const reg = /^\d+$/; // to denote only numbers

    if (this.state.touched.telnum && !reg.test(telnum)) {
      error.telnum = "telephone number should be only numbers";
    }

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    ) {
      error.email = "email should contain a @ sign";
    }

    return error;
  }

  render() {
    const error = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h3>Give us your feedback</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <FormGroup row>
                <Label for="fName" sm={2}>
                  First Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="firstname"
                    id="fName"
                    placeholder="First name"
                    value={this.state.firstname}
                    onChange={(event) => this.handleInputChange(event)}
                    onBlur={() => this.handleBlur("firstname")}
                    invalid={error.firstname !== ""}
                  />
                  <FormFeedback>{error.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="lName" sm={2}>
                  Last Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="lastname"
                    id="lName"
                    placeholder="Last name"
                    value={this.state.lastname}
                    onChange={(event) => this.handleInputChange(event)}
                    onBlur={() => this.handleBlur("lastname")}
                    invalid={error.lastname !== ""}
                  />
                  <FormFeedback>{error.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="telephoneNum" sm={2}>
                  Contact No.
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="telnum"
                    id="telephoneNum"
                    placeholder="Telephone number"
                    value={this.state.telnum}
                    onChange={(event) => this.handleInputChange(event)}
                    onBlur={() => this.handleBlur("telnum")}
                    invalid={error.telnum !== ""}
                  />
                  <FormFeedback>{error.telnum}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="emailNum" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    id="emailNum"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(event) => this.handleInputChange(event)}
                    onBlur={() => this.handleBlur("email")}
                    invalid={error.email !== ""}
                  />
                  <FormFeedback>{error.email}</FormFeedback>
                </Col>
              </FormGroup>

              <Row Form>
                <Col sm={{ size: 7, offset: 2 }}>
                  <FormGroup check>
                    <Input
                      type="checkbox"
                      name="agree"
                      id="exampleCheck"
                      checked={this.state.agree}
                      onChange={(event) => this.handleInputChange(event)}
                    />
                    <Label for="exampleCheck" check>
                      May we contact you?
                    </Label>
                  </FormGroup>
                </Col>
                <Col sm={{ size: 3 }}>
                  <Input
                    type="select"
                    name="contactType"
                    id="contactType"
                    value={this.state.contactType}
                    onChange={(event) => this.handleInputChange(event)}
                  >
                    <option>tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </Row>

              <FormGroup row>
                <Label for="exampleText" sm={2}>
                  Your feedback
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="message"
                    id="exampleText"
                    rows="10"
                    onChange={(event) => this.handleInputChange(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Contact;
