import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import HandBook from './Section/HandBook';
import HomeFooter from './HomeFooter';

import OutStandingDoctor from './Section/OutStandingDoctor';
import './HomePage.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            Infinity:true,
            speed : 500,
            slidesToShow : 4,
            slidesToScroll: 2,
          };
        
        return (
            <div>
                <HomeHeader/>
                <Specialty
                    settings={settings}/>
                <OutStandingDoctor
                    settings={settings}/>
                <HandBook
                    settings={settings}/>
                <HomeFooter/>
            </div>
        );
    }

}
// redux
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
