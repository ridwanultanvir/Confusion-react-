import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderCard({ item, isLoading, errorMessage }) {
  if (isLoading) {
    return <Loading />;
  } else if (errorMessage != null) {
    return <h4>{errorMessage}</h4>;
  } else {
    return (
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name}></CardImg>
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
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dishes}
            isLoading={props.dishIsLoading}
            errorMessage={props.dishErrorMessage}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotions}
            isLoading={props.promotionsLoading}
            errorMessage={props.promotionsErrorMessage}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leaders} />
        </div>
      </div>
    </div>
  );
}

export default Home;
