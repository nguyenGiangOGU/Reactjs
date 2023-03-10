import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import ProductManage from '../containers/System/ProductManage';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';
class System extends Component {
    render() {
         {/* {this.props.isLoggedIn && <Header isLoggedIn={this.props.isLoggedIn} />} */}
        const { systemMenuPath} = this.props;
        return ( 
            <div>
            <div className="system-container">
                <div className="system-list">
                    <Switch>
                        {/* <Route path="/system/product-manage" exact component={ProductManage} />
                        <Route path="/system/user-manage" exact component={UserManage}/>
                        <Route path="/system/register-package-group-or-account" exact component={RegisterPackageGroupOrAcc} /> */}
                        <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
