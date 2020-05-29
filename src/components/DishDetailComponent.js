import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  ModalHeader,
  ModalBody,
  Modal,
  Button,
  Row,
  Label,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    console.log("dish detail component constructor invoked");
  }

  componentDidMount() {
    console.log("dish detail component componentDidMount");
  }

  componentDidUpdate() {
    console.log("dishDetail component did update invoked");
  }

  render() {
    console.log("dish detail render invoked");
    if (this.props.dishIsLoading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Loading />
            </div>
          </div>
        </div>
      );
    } else if (this.props.dishErrorMessage != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>{this.props.dishErrorMessage}</h4>
            </div>
          </div>
        </div>
      );
    } else if (this.props.dish != null) {
      const details = this.dishDetails();
      const comments = this.RenderComments();
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{this.props.dish.name}</h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5">{details}</div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <h1>Comments</h1>
              {comments}
            </div>
          </div>
        </div>
      );
    }
  }

  dishDetails() {
    const dish = this.props.dish;
    const details = (
      <Card>
        <CardImg top width="100%" src={baseUrl + dish.image} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
    return details;
  }

  RenderComments() {
    if (this.props.commentsErrorMessage != null) {
      return (
        <div>
          <h4>{this.props.commentsErrorMessage}</h4>
        </div>
      );
    } else {
      const comments = this.props.comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.author}</h3>
          <p>Date: {comment.date.substring(0, 10)}</p>
          <p>Time: {comment.date.substring(11, 19)}</p>
          <p>Rating: {comment.rating} stars </p>
          <p>Comment: {comment.comment}</p>
          <br />
        </div>
      ));

      return (
        <div>
          {comments}
          <CommentForm
            dishId={this.props.dish.id}
            postComment={this.props.postComment}
          />
          <br />
        </div>
      );
    }
  }
}

const required = (value) => value && value.length > 0;
const maxLength = (value) => !value || value.length <= 15;
const minLength = (value) => value && value.length >= 3;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleSubmit(values) {
    this.toggleModal();
    alert(JSON.stringify(values));
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.Name,
      values.Comment
    );
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <div>
        <Button outline color="info" onClick={() => this.toggleModal()}>
          Submit comment
        </Button>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={() => this.toggleModal()}
        >
          <ModalHeader toggle={() => this.toggleModal()}>
            Submit comment
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Col md={2}>
                    <Label htmlFor="rating">Rating</Label>
                  </Col>
                  <Col md={10}>
                    <Control.select
                      id="rating"
                      model=".rating"
                      name="rating"
                      className="form-control"
                      defaultValue="1"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={2}>
                    <Label htmlFor="name">Name</Label>
                  </Col>
                  <Col md={10}>
                    <Control.text
                      className="form-control"
                      id="name"
                      model=".Name"
                      placeholder="your name"
                      validators={{
                        required,
                        maxLength,
                        minLength,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".Name"
                      show="touched"
                      messages={{
                        required: "this field is required.",
                        maxLength: "name should be less than 15 charecters.",
                        minLength: "name should be more than 2 charecters.",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={2}>
                    <Label htmlFor="comment">Comment</Label>
                  </Col>
                  <Col md={10}>
                    <Control.textarea
                      className="form-control"
                      id="comment"
                      model=".Comment"
                      rows="6"
                    />
                  </Col>
                </Row>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DishDetail;
