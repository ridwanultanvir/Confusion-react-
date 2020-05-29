import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponet";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  addComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => ({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders,
});

// function mapStateToProps(state) {
//   return {
//     dishes: state.dishes,
//     comments: state.comments,
//     promotions: state.promotions,
//     leaders: state.leaders,
//   };
// }

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),

  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
    // feedback is the name of the form model in contactuscomponent. action.reset() which
    // resets the form model to it's inititial state described in configureStore->createforms
  },
});

class Main extends Component {
  //dishId = null;

  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
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
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId)
            )[0]
          }
          dishIsLoading={this.props.dishes.isLoading}
          dishErrorMessage={this.props.dishes.errorMessage}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId)
          )}
          commentsErrorMessage={this.props.comments.errorMessage}
          addComment={this.props.addComment}
        />
      );
    };

    const HomePage = () => (
      <Home
        dishes={
          this.props.dishes.dishes.filter((dish) => dish.featured === true)[0]
        }
        dishIsLoading={this.props.dishes.isLoading}
        dishErrorMessage={this.props.dishes.errorMessage}
        leaders={
          this.props.leaders.filter((leader) => leader.featured === true)[0]
        }
        promotions={
          this.props.promotions.promotions.filter(
            (promo) => promo.featured === true
          )[0]
        }
        promotionsLoading={this.props.promotions.isLoading}
        promotionsErrorMessage={this.props.promotions.errorMessage}
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
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/contactus">
            <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
          </Route>
          <Route path="/aboutus">
            <About leaders={this.props.leaders} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
