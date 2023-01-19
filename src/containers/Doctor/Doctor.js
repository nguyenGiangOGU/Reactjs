import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default class Doctor extends Component {
  render() {
    return (
      <>
        <header id="dieuhuong">
          <div class="vung-bao">
            <a href="javascript:quaylai()">
              <span class="bt-g bt-g-muiten-trai" aria-hidden="true"></span>
            </a>
            <h2>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h2>
            <div class="dieuhuong-phai">
              <a href="/hotro" class="dieuhuong-nut">
                <span class="bt-g bt-g-dauhoi"></span>
                <div>Hỗ trợ</div>
              </a>
              <button class="trinhdon-congtac">
                <span class="duong-ke"></span>
                <span class="duong-ke"></span>
                <span class="duong-ke"></span>
              </button>
            </div>
          </div>
        </header>
        <div style={{ paddingTop: "100px" }} className="bs">
          <div className="bs-sodo">
            <div className="vung-bao">
              <ul className="sodo" id="sodo">
                <li>
                  <a href="/">
                    <span className="bt-g bt-g-trangchu" />
                  </a>
                </li>
                <li>
                  <a href="/#chuyenkhoa">Khám chuyên khoa</a>
                </li>
                <li>
                  <a href="/suc-khoe-tam-than-s27"> Sức khỏe tâm thần </a>
                  <a href="/tu-van-tri-lieu-tam-ly-s66">
                    {" "}
                    Tư vấn, trị liệu Tâm lý{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bs-thongtin ">
            <div className="vung-bao">
              <div className="bs-anh">
                <img
                  src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                  className="luoi"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                  alt="Bác sĩ Chuyên khoa II Trần Minh Khuyên"
                />
              </div>
              <div className="bs-soluoc">
                <h1 className="bs-ten">
                  {" "}
                  Bác sĩ Chuyên khoa II Trần Minh Khuyên{" "}
                </h1>
                <div className="bs-tomtat">
                  {" "}
                  Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí
                  Minh
                  <br />
                  Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris
                  (Psychology practique de Paris)
                  <br />
                  Bác sĩ nhận khám từ 16 tuổi trở lên
                </div>
                <div className="bs-fb">
                  <div
                    className="fb-like fb_iframe_widget"
                    data-width
                    data-layout="button_count"
                    data-action="like"
                    data-size="small"
                    data-share="true"
                    fb-xfbml-state="rendered"
                    fb-iframe-plugin-query="action=like&app_id=1029975067121593&container_width=574&href=https%3A%2F%2Fbookingcare.vn%2Fbac-si-chuyen-khoa-ii-tran-minh-khuyen-d1466.html%23lichtiep&layout=button_count&locale=vi_VN&sdk=joey&share=true&size=small&width="
                  >
                    <span
                      style={{
                        verticalAlign: "bottom",
                        width: "150px",
                        height: "28px",
                      }}
                    >
                      <iframe
                        name="f3420072d40ed18"
                        width="1000px"
                        height="1000px"
                        data-testid="fb:like Facebook Social Plugin"
                        title="fb:like Facebook Social Plugin"
                        frameBorder={0}
                        allowTransparency="true"
                        allowFullScreen="true"
                        scrolling="no"
                        allow="encrypted-media"
                        src="https://www.facebook.com/v14.0/plugins/like.php?action=like&app_id=1029975067121593&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df322bb7525f924%26domain%3Dbookingcare.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbookingcare.vn%252Ff21a2db95a0ead8%26relation%3Dparent.parent&container_width=574&href=https%3A%2F%2Fbookingcare.vn%2Fbac-si-chuyen-khoa-ii-tran-minh-khuyen-d1466.html%23lichtiep&layout=button_count&locale=vi_VN&sdk=joey&share=true&size=small&width="
                        style={{
                          border: "none",
                          visibility: "visible",
                          width: "150px",
                          height: "28px",
                        }}
                        className
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bs-lichkham bs-phandoan">
            <div id="lichkham">
              <div className="vung-bao">
                <div
                  id="lichkham_chitiet"
                  className="lichkham_chitiet uutien-som"
                  dl-tt="false"
                  dl-bs-id={1466}
                  dl-bs-ma
                  dl-hien-noikham="true"
                  dl-dichvu="Khám"
                  dl-hien-diachi={1}
                  dl-dienthoai="024-7301-2468"
                >
                  <div className="mot-bs mot-bs-1466" data-dichvu="Khám">
                    <div className="mot-bs-lichkham">
                      <p className="mot-bs-chon-gio">
                        <select className="select">
                          <option value=".lich-c1466-d12">Thứ 6 - 27/1</option>
                        </select>
                      </p>
                      <div
                        data-thu={12}
                        data-chonngay=".lich-c1466-d12"
                        className="mot-bs-ngay mot-bs-thu9 lich-c1466-d12 lich-c1466-d12-p154 hien"
                      >
                        <h3 className="mot-bacsi-dichvu mot-bacsi-dichvu-1">
                          <i className="icon-dichvu bt-g bt-g-lich glyphicon glyphicon-calendar" />{" "}
                          Lịch Khám
                        </h3>
                        <div className="lich-kham-hom-nay">
                          <div className="mot-bs-co-lichkham">
                            <Link to="/schedule">
                              {" "}
                              <a
                                href="https://bookingcare.vn/dat-lich-kham/10157799?t=12"
                                data-id={10157799}
                                data-partner={124}
                                data-wday={12}
                                data-name="08:00 - 08:30"
                                rel="nofollow"
                                className="mot-bs-giokham mot-bs-giokham-dichvu-1"
                              >
                                08:00 - 08:30
                              </a>
                            </Link>
                          </div>
                          <div className="mot-bs-lichkham-huongdan" data-name>
                            Chọn{" "}
                            <span className="bt-g bt-g-chitay-tren glyphicon glyphicon-hand-up" />{" "}
                            và đặt (Phí đặt lịch 0<sup>đ</sup>)
                          </div>
                        </div>
                        <div className="lichkham-thongtin">
                          <div className="lichkham-diadiem">
                            <h3>Địa chỉ Khám</h3>
                            <div className="lichkham-ten">
                              Phòng khám Bệnh viện Đại học Y Dược 1
                            </div>
                            <div className="lichkham-diachi">
                              20-22 Dương Quang Trung, Phường 12, Quận 10, Tp.
                              HCM
                            </div>
                          </div>
                          <div
                            className="lichkham-giakham"
                            data-bs={1466}
                            data-nk={154}
                          >
                            <h3>Giá Khám: </h3>{" "}
                            <span className="lichkham-giakham-tomtat">
                              250.000<sup>đ</sup>
                            </span>
                            <span className="lichkham-giakham-tomtat">
                              500.000<sup>đ</sup>
                            </span>
                            .{" "}
                            <a
                              className="lichkham-banggia-hien"
                              href="#giakham"
                            >
                              Xem chi tiết
                            </a>
                            <div>
                              <div className="lichkham-banggia-bang lichkham-bang" />
                              <a
                                className="lichkham-banggia-an"
                                href="#angiakham"
                              >
                                Ẩn bảng giá
                              </a>
                            </div>
                          </div>
                          <div
                            className="lichkham-baohiem"
                            data-bs={1466}
                            data-nk={154}
                          >
                            <h3>Loại bảo hiểm áp dụng.</h3>{" "}
                            <a
                              className="lichkham-baohiem-hien"
                              href="#baohiem"
                            >
                              Xem chi tiết
                            </a>
                            <div>
                              <div className="lichkham-baohiem-bang lichkham-bang" />
                              <a
                                className="lichkham-baohiem-an"
                                href="#anbaohiem"
                              >
                                Thu gọn
                              </a>
                              <div className="lichkham-modal" />
                              <div className="lichkham-modal-nen" />
                            </div>
                          </div>
                        </div>
                        <div className="xeplai" />
                      </div>
                      <div className="mo-lichtiep">
                        <a className="mo-lichtiep-lk" href="#lichtiep">
                          Lịch tiếp theo: <span>Thứ 6 - 27/1</span>. Xem»
                        </a>
                      </div>
                    </div>
                    <div className="xeplai clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bs-chitiet bs-phandoan">
            <div className="vung-bao">
              <div className="bs-noidung" id="bs-gioithieu">
                <h2>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h2>
                <ul>
                  <li>
                    Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí
                    Minh
                  </li>
                  <li>
                    Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris
                    (Psychology practique de Paris)
                  </li>
                  <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li>
                </ul>
                <h3>Quá trình đào tạo</h3>
                <ul>
                  <li>
                    Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học y dược thành phố
                    Hồ Chí Minh
                  </li>
                  <li>
                    Học chuyên khoa cấp I và chuyên khoa cấp II Chuyên ngành Tâm
                    thần, Đại học Y khoa Huế
                  </li>
                  <li>
                    Tốt nghiệp Tâm lý trị liệu, trường Tâm lý thực Hành Paris
                    (Psychology practique de Paris)
                  </li>
                </ul>
                <h3>Quá trình công tác</h3>
                <ul>
                  <li>
                    Nguyên Trưởng phòng Kế hoạch Nghiệp vụ, Trưởng phòng khám
                    Tâm thần Quận 3, thành phố Hồ Chí Minh
                  </li>
                  <li>
                    Nguyên Trưởng khoa lâm sàng Bệnh tâm thần thành phố Hồ Chí
                    Minh
                  </li>
                  <li>
                    Giám định viên tư pháp chuyên ngành Tâm thần giám định các
                    trường hợp trọng án, các trường hợp có liên quan pháp lý do
                    cảnh sát điều tra, tòa án các cấp trưng cầu.
                  </li>
                </ul>
                <h2>Khám và điều trị</h2>
                <ul>
                  <li>
                    Các rối loạn giấc ngủ không thực tổn: mất ngủ, ngủ nhiều,
                    ngủ ngày quá mức, rối loạn nhịp thức ngủ, hoảng sợ khi ngủ,
                    ác mộng, ngủ rũ,...
                  </li>
                  <li>
                    Các rối loạn lo âu: lo lắng, sợ hãi về tương lai, cảm giác
                    cáu gắt, căng thẳng, vận động, bồn chồn, hồi hộp, vã mồ hôi
                    tay chân, cồn cào,...
                  </li>
                  <li>
                    Rối loạn trầm cảm: buồn chán, bi quan, mệt mỏi, giảm hoạt
                    động,...
                  </li>
                  <li>
                    Hưng cảm: vui vẻ quá mức, suồng sã, tăng hoạt động, đứng
                    ngồi không yên,...
                  </li>
                  <li>
                    Rối loạn hoang tưởng:&nbsp;hoang tưởng bị hại, bị theo dõi,
                    liên hệ, bị tội,...
                  </li>
                  <li>Rối loạn ảo giác</li>
                  <li>Các rối loạn liên quan đến stress</li>
                  <li>Rối loạn khí sắc</li>
                  <li>Rối loạn cảm xúc phân liệt</li>
                  <li>Rối loạn đa nhân cách</li>
                  <li>
                    Các bệnh lý loạn thần do sử dụng chất (ma túy đá, cần sa,
                    heroin..)...
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bs-phanhoi" id="bs-phanhoi">
            <div className="vung-bao">
              <h2 className="bs-tieude">
                Phản hồi của bệnh nhân sau khi đi khám
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}
