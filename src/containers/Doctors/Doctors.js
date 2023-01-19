import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default class Doctors extends Component {
  render() {
    return (
      <div className="cuasosss">
        <div className="cuaso-vung cuaso-co-timkiem">
          <div className="cuaso-dau">
            <h2 className="cuaso-tieude">Bác sĩ</h2>
            <button
              type="button"
              className="cuaso-dong"
              dl-cuaso="bacsi"
              aria-label="Đóng"
            >
              <i class="bi bi-arrow-left  bt-g bt-g-muiten-trai"></i>
            </button>
          </div>
          <div className="cuaso-timkiem">
            <input
              type="search"
              id="timkiem_bacsi"
              placeholder="Tìm kiếm bác sĩ"
            />
          </div>
          <div id="timkiem_bacsi_ketqua" />
          <div className="cuaso-noidung">
            <h3 className="cuaso-daumuc">Bác sĩ nổi bật</h3>
            <div className="bacsi-ds" dl-tai={1}>
              <ul>
                <li>
                  <Link to={"/doctor"}>
                    <img
                      data-src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                      src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                      className="luoi"
                      width={50}
                      height={50}
                      alt="Bác sĩ Chuyên khoa II Trần Minh Khuyên"
                    />
                    <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                    <h4>
                      <span>Sức khỏe tâm thần</span>
                      <span>Tư vấn, trị liệu Tâm lý</span>
                    </h4>
                  </Link>
                </li>
                <li>
                  <Link to={"/doctor"}>
                    <img
                      data-src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                      src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                      className="luoi"
                      width={50}
                      height={50}
                      alt="Bác sĩ Chuyên khoa II Trần Minh Khuyên"
                    />
                    <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                    <h4>
                      <span>Sức khỏe tâm thần</span>
                      <span>Tư vấn, trị liệu Tâm lý</span>
                    </h4>
                  </Link>
                </li>
                <li>
                  <Link to={"/doctor"}>
                    <img
                      data-src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                      src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                      className="luoi"
                      width={50}
                      height={50}
                      alt="Bác sĩ Chuyên khoa II Trần Minh Khuyên"
                    />
                    <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                    <h4>
                      <span>Sức khỏe tâm thần</span>
                      <span>Tư vấn, trị liệu Tâm lý</span>
                    </h4>
                  </Link>
                </li>
                <li>
                  <Link to={"/doctor"}>
                    <img
                      data-src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                      src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                      className="luoi"
                      width={50}
                      height={50}
                      alt="Bác sĩ Chuyên khoa II Trần Minh Khuyên"
                    />
                    <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                    <h4>
                      <span>Sức khỏe tâm thần</span>
                      <span>Tư vấn, trị liệu Tâm lý</span>
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
