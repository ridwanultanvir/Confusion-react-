import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name}></CardImg>
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}{" "}
        {/* only leader has designation. */}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dishes} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotions} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leaders} />
        </div>
      </div>
    </div>
  );
}

export default Home;
