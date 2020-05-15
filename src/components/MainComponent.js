import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponet";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  //dishId = null;

  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  setSelectedDish(dish) {
    this.setState({ selectedDish: dish });
  }

  showDish(dish) {
    console.log(dish);
  }

  render() {
    this.showDish(this.state.selectedDish);

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId)
          )}
        />
      );
    };

    const HomePage = () => (
      <Home
        dishes={this.state.dishes.filter((dish) => dish.featured === true)[0]}
        leaders={
          this.state.leaders.filter((leader) => leader.featured === true)[0]
        }
        promotions={
          this.state.promotions.filter((promo) => promo.featured === true)[0]
        }
      />
    );

    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={DISHES} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/contactus">
            <Contact />
          </Route>
          <Route path="/aboutus">
            <About />
          </Route>
          {/*<Redirect to="/home" />*/}
        </Switch>
        <Footer />
      </div>
    );
  }

  // render() {
  //   this.showDish(this.state.selectedDish);
  //   return (
  //     <div className="container">
  //       <Header />
  //       <Menu
  //         dishes={DISHES}
  //         setSelectedDish={(dish) => this.setSelectedDish(dish)}
  //       />
  //       <DishDetail dish={this.state.selectedDish} />
  //       <Footer />
  //     </div>
  //   );
  // }
}

export default Main;
