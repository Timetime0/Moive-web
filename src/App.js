import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./StyledComponent/theme/darkTheme";
import Waiting from "./Pages/Waiting/Waiting";
import { clientRouter } from "./config/router.config";
import { connect } from "react-redux";
import { Component } from "react";
import { LOGIN_ADMIN, LOGIN_USER } from "./Redux/Types/auth-type";
import BackToTop from "./Components/BackToTop/BackToTop";
import ScrollToTop from "./Components/BackToTop/ScrollToTop";
import { Suspense } from "react";

class App extends Component {
  RenderRouterList = () => {
    return clientRouter.map((item, index) => {
      return (
        <Route
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      );
    });
  };

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Waiting />
          <Suspense
            fallback={
              <div>
                {" "}
                <Waiting />
              </div>
            }
          >
            <Switch>{this.RenderRouterList()}</Switch>
          </Suspense>
          <BackToTop />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    );
  }

  getUserFromLocal = () => {
    const userAdmin = localStorage.getItem("admin");
    const userClient = localStorage.getItem("client");
    if (userAdmin) {
      this.props.dispatch({
        type: LOGIN_ADMIN,
        data: JSON.parse(userAdmin),
      });
    }
    if (userClient) {
      this.props.dispatch({
        type: LOGIN_USER,
        data: JSON.parse(userClient),
      });
    }
  };

  componentDidMount() {
    this.getUserFromLocal();
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.userReducer.user.admin,
  };
};

export default connect(mapStateToProps)(App);
