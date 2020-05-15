import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Collapse,
  NavItem,
  NavbarToggler,
  Jumbotron,
  Button,
  ModalHeader,
  ModalBody,
  Modal,
  FormGroup,
  Label,
  Input,
  Form,
  Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username " +
        this.username.value +
        " password " +
        this.password.value +
        " Rememebr me " +
        this.remember.checked
    );
    event.preventDefautlt();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="#">
              <img src="assets/images/images/logo.png" height="30" width="41" />
            </NavbarBrand>
            <NavbarToggler onClick={() => this.toggleNav()} className="mr-2" />

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About us
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button
                    outline
                    color="primary"
                    onClick={() => this.toggleModal()}
                  >
                    Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-md-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
                  Bla Bla Bla Bla Bla Bla Bla Bla Bla
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={() => this.toggleModal()}
        >
          <ModalHeader toggle={() => this.toggleModal()}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={(event) => this.handleLogin(event)}>
              <FormGroup row>
                <Label for="username" sm={2}>
                  Username:
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    innerRef={(input) => (this.username = input)}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="username" sm={2}>
                  Password:
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    innerRef={(input) => (this.password = input)}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={{ size: 10 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="remember"
                        innerRef={(input) => (this.remember = input)}
                      />{" "}
                      Remember me
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
