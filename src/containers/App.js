import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";
import Doctors from "./Doctors/Doctors";
import Doctor from "./Doctor/Doctor";
import Schedule from "./Schedule/Schedule";
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";
import { path } from "../utils";
import Home from "../routes/Home";
// import Login from '../routes/Login'; ADMIN
import Login from "../containers/Auth/Login"; //CUSTOMER
import Header from "./Header/Header";
import System from "../routes/System";

import { CustomToastCloseButton } from "../components/CustomToast";
import HomePage from "./HomePage/HomePage";
import ProductManage from "./System/ProductManage";
import UserManage from "./System/UserManage";
import RegisterPackageGroupOrAcc from "./System/RegisterPackageGroupOrAcc";
import CustomScrollbars from "../components/CustomScrollbars";
import CheckHeader from "./CheckHeader";
class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    // this.handlePersistorState();
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <div className="main-container">
            <div className="content-container">
              <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
                <Switch>
                  <Route
                    path={path.SYSTEM}
                    exact
                    component={userIsAuthenticated(System)}
                  />
                  <Route path={path.HOME} exact component={Home} />
                  <Route
                    path={path.LOGIN}
                    exact
                    component={userIsNotAuthenticated(Login)}
                  />

                  <Route path={"/doctors"} exact component={Doctors} />
                  <Route path={"/doctor"} exact component={Doctor} />
                  <Route path={"/schedule"} exact component={Schedule} />
                  {/*userIsNotAuthenticated check quyền có quyền vào hay k? */}
                  <Route path={path.HOMEPAGE} exact component={HomePage} />
                  {/* ADMIN */}
                  <Route
                    path="/system/product-manage"
                    exact
                    component={ProductManage}
                  />
                  <Route
                    path="/system/user-manage"
                    exact
                    render={() => [
                      <CheckHeader>
                        <UserManage />
                      </CheckHeader>,
                    ]}
                  />
                  <Route
                    path="/system/register-package-group-or-account"
                    exact
                    component={RegisterPackageGroupOrAcc}
                  />
                </Switch>
              </CustomScrollbars>
            </div>

            <ToastContainer
              className="toast-container"
              toastClassName="toast-item"
              bodyClassName="toast-item-body"
              autoClose={false}
              hideProgressBar={true}
              pauseOnHover={false}
              pauseOnFocusLoss={true}
              closeOnClick={false}
              draggable={false}
              closeButton={<CustomToastCloseButton />}
            />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
