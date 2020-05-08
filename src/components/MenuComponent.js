import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log("menu component constructor");
  }

  render() {
    console.log("menu component render");
    const menu = this.getMenu();
    return <div className="container">{menu}</div>;
  }

  componentDidMount() {
    console.log("menu component componentDidMount");
  }

  getMenu() {
    const menu = this.props.dishes.map((dish) => (
      <div className="row" key={dish.id}>
        <div className="col-md-12 mt-5">
          <Media onClick={() => this.props.setSelectedDish(dish)}>
            <Media left>
              <Media object src={dish.image} className="mr-3"></Media>
            </Media>
            <Media body>
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      </div>
    ));

    return menu;
  }
}

export default Menu;
