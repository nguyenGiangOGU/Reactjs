import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nỗi bật</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <Link to="/doctor">
                <div style={{ color: "black" }} className="section-customize">
                  <div className="outer-bg">
                    <div className="section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư Tiến Sĩ</div>
                    <div>Cơ Xương Khớp</div>
                  </div>
                </div>
              </Link>
              <Link to="/doctor">
                <div style={{ color: "black" }} className="section-customize">
                  <div className="outer-bg">
                    <div className="section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư Tiến Sĩ</div>
                    <div>Cơ Xương Khớp</div>
                  </div>
                </div>
              </Link>
              <Link to="/doctor">
                <div style={{ color: "black" }} className="section-customize">
                  <div className="outer-bg">
                    <div className="section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư Tiến Sĩ</div>
                    <div>Cơ Xương Khớp</div>
                  </div>
                </div>
              </Link>
              <Link to="/doctor">
                <div style={{ color: "black" }} className="section-customize">
                  <div className="outer-bg">
                    <div className="section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư Tiến Sĩ</div>
                    <div>Cơ Xương Khớp</div>
                  </div>
                </div>
              </Link>
              <Link to="/doctor">
                <div style={{ color: "black" }} className="section-customize">
                  <div className="outer-bg">
                    <div className="section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư Tiến Sĩ</div>
                    <div>Cơ Xương Khớp</div>
                  </div>
                </div>
              </Link>
              <Link to="/doctor">
                <div style={{ color: "black" }} className="section-customize">
                  <div className="outer-bg">
                    <div className="section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư Tiến Sĩ</div>
                    <div>Cơ Xương Khớp</div>
                  </div>
                </div>
              </Link>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
// redux
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
