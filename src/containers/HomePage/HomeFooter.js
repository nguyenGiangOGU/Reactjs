import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';



class About extends Component {
    render() {

       
        return (
            <div className='home-footer'>
                <p>&copy; 2023 Care for you with Giang <a href='#'>More information</a></p>
            </div>
        );
    }

}
// redux
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
