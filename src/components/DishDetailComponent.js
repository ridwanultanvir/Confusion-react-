import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

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
    if (this.props.dish === null) {
      return <div></div>;
    } else {
      const details = this.dishDetails();
      const comments = this.getComments();
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
        <CardImg top width="100%" src={dish.image} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
    return details;
  }

  getComments() {
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

    return comments;
  }
}

export default DishDetail;
