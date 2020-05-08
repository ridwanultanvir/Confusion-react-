import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

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
        <div className="row mt-5">
          <div className="col-md-5">{details}</div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <h1>Comments</h1>
            {comments}
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
    const comments = this.props.dish.comments.map((comment) => (
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
