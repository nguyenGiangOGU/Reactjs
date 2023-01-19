import React from "react";
import "./style.css";
export default function Schedule() {
  return (
    <div>
      <div className="mot-bs">
        <div className="vung-bao">
          <div className="mot-bs-thongtin">
            <div className="mot-bs-anh">
              <a href="/bac-si-chuyen-khoa-ii-tran-minh-khuyen-d1466.html?t=12&schedule_id=10157799">
                <img
                  src="https://cdn.bookingcare.vn/fr/w100/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                  alt="Bác sĩ Chuyên khoa II Trần Minh Khuyên"
                />
              </a>
            </div>
            <div className="mot-bs-soluoc">
              <h1>Đặt lịch khám</h1>
              <h2 className="mot-bs-ten">
                <a href="/bac-si-chuyen-khoa-ii-tran-minh-khuyen-d1466.html?t=12&schedule_id=10157799">
                  Bác sĩ Chuyên khoa II Trần Minh Khuyên{" "}
                </a>
              </h2>
              <div className="mot-bs-diadiem">
                {" "}
                08:00 - 08:30 - Thứ 6 - 27/01/2023{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="datlich-thongtin">
        <div className="vung-bao">
          <form
            method="POST"
            id="datlichkham"
            action="/appointment/book/submit?schedule=10157799"
          >
            <input
              type="hidden"
              name="data"
              defaultValue="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzQwNTUxODgsIm5iZiI6MTY3NDA1NTE4OCwibWFzdWEiOiIiLCJzb3VyY2UiOiIiLCJzY2hlZHVsZV9pZCI6IjEwMTU3Nzk5Iiwic2NoZWR1bGVfbWludXRlX3JhbmdlIjoiMzAiLCJzY2hlZHVsZV90aW1lIjoxNjc0NzgxMjAwLCJzY2hlZHVsZV90eXBlIjoxLCJzZXJ2aWNlIjoiMSIsImNsaW5pY19pZCI6IjE0NjYiLCJjbGluaWNfY29kZSI6IiIsImZvcndhcmQiOjEsInBheV9hbW91bnQiOiIyNTAwMDAiLCJib29rX21ldGhvZCI6MSwicmVmZXJyZXIiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MzAwMFwvIiwicGFnZV9pZCI6bnVsbCwic3BlY2lhbGlzdF9pZCI6IjI3IiwicmVib29rX25leHRkYXlfc3VnZ2VzdCI6bnVsbCwicGF5bWVudF9zY29wZSI6IjAiLCJwYXJ0bmVyX2lkIjoiMTI0IiwicGxhY2VfaWQiOiIxNTQiLCJvdXJfaW5jb21lIjpudWxsfQ.TmNM5gJWYho46hRNrObnSUU8_oUAJfyy_ZK0JaFaXZnVowboN7UrsRSzF6ffds5R6YMqX6nuO_uWCrTM1hHiCnWDE7NHO510I1PXwLtt1n6ymw0RBkuyT-M4HExqWqJaJGc3XyMvDfBTzay-fwd0JzK9U3GRP5ETdEUb9JOSLU4"
            />
            <input type="hidden" name="partner_id" defaultValue={124} />
            <input type="hidden" name="place_id" defaultValue={154} />
            <input type="hidden" name="schedule_id" defaultValue={10157799} />
            <div>
              <label className="giakham chon" data-price={250000}>
                <input
                  type="radio"
                  defaultChecked="checked"
                  name="price"
                  defaultValue={2783}
                />
                <span>Giá khám </span>
                <div>250.000đ</div>
              </label>
            </div>
            <div className="dauvao-nhom">
              <label>
                <input
                  className="dauvao-nhap"
                  type="radio"
                  name="book_for"
                  defaultValue={0}
                  dl-luu="book_for"
                  dl-name="datcho"
                  dl-value="minh"
                />{" "}
                Đặt cho mình
              </label>
              <label>
                <input
                  className="dauvao-nhap"
                  type="radio"
                  name="book_for"
                  defaultValue={1}
                  dl-luu="book_for"
                  dl-name="datcho"
                  dl-value="nguoi"
                />{" "}
                Đặt cho người thân
              </label>
            </div>
            <div className="an datcho-nguoi">
              <p className="tieude-nhom">Thông tin người đặt lịch</p>
              <div className="dauvao-nhom ">
                <div className="o-nhap">
                  <span className="dauvao-bt bt-g bt-g-nguoi" />
                  <input
                    className="dauvao-nhap"
                    id="contact_name"
                    name="contact_name"
                    onblur="normalizeContactName()"
                    defaultValue
                    dl-luu="contact_name"
                    disabled="disabled"
                    type="text"
                    placeholder="Họ tên người đặt lịch"
                    autoComplete="name"
                  />
                </div>
                <div className="dauvao-thongbao" />
              </div>
              <div className="dauvao-nhom">
                <div className="o-nhap">
                  <span className="dauvao-bt bt-g bt-g-dienthoai" />
                  <input
                    className="dauvao-nhap batbuoc"
                    name="phone"
                    defaultValue
                    dl-luu="phone"
                    disabled="disabled"
                    type="tel"
                    placeholder="Số điện thoại liên hệ (bắt buộc)"
                    autoComplete="tel"
                  />
                </div>
                <div className="dauvao-thongbao" />
              </div>
              <p className="tieude-nhom">Thông tin bệnh nhân</p>
            </div>
            <div className="dauvao-nhom">
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-nguoi" />
                <input
                  className="dauvao-nhap batbuoc"
                  id="name"
                  name="name"
                  onblur="normalizeName()"
                  defaultValue
                  dl-luu="name"
                  type="text"
                  placeholder="Họ tên bệnh nhân (bắt buộc)"
                  autoComplete="name"
                />
              </div>
              <div className="dauvao-ghichu">
                Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ:
                Trần Văn Phú
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom">
              <label>
                <input
                  className="dauvao-nhap batbuoc"
                  type="radio"
                  name="gender"
                  defaultValue={0}
                  dl-luu="gender"
                />{" "}
                Nam
              </label>
              <label>
                <input
                  className="dauvao-nhap"
                  type="radio"
                  name="gender"
                  defaultValue={1}
                  dl-luu="gender"
                />{" "}
                Nữ
              </label>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom datcho-minh">
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-dienthoai" />
                <input
                  className="dauvao-nhap batbuoc"
                  name="phone"
                  dl-luu="phone"
                  type="tel"
                  placeholder="Số điện thoại liên hệ (bắt buộc)"
                />
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom an datcho-nguoi">
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-dienthoai" />
                <input
                  className="dauvao-nhap"
                  name="phone2"
                  disabled="disabled"
                  dl-luu="phone2"
                  type="tel"
                  placeholder="Số điện thoại bệnh nhân"
                  autoComplete="tel"
                />
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom">
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-lich" />
                <input
                  className="dauvao-nhap batbuoc"
                  dl-luu="full_birthtime"
                  name="full_birthtime"
                  type
                  placeholder="Ngày/tháng/năm sinh (bắt buộc)"
                  maxLength={10}
                />
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom">
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-diadiem" />
                <select
                  name="province_id"
                  dl-luu="province_id"
                  className="dauvao-nhap batbuoc"
                  placeholder="Tỉnh / Thành phố"
                >
                  <option value>-- Chọn Tỉnh/Thành --</option>
                  <option value={89}>Tỉnh An Giang</option>
                  <option value={77}>Tỉnh Bà Rịa - Vũng Tàu</option>
                  <option value={24}>Tỉnh Bắc Giang</option>
                  <option value={6}>Tỉnh Bắc Kạn</option>
                  <option value={95}>Tỉnh Bạc Liêu</option>
                  <option value={27}>Tỉnh Bắc Ninh</option>
                  <option value={83}>Tỉnh Bến Tre</option>
                  <option value={74}>Tỉnh Bình Dương</option>
                  <option value={70}>Tỉnh Bình Phước</option>
                  <option value={60}>Tỉnh Bình Thuận</option>
                  <option value={52}>Tỉnh Bình Định</option>
                  <option value={96}>Tỉnh Cà Mau</option>
                  <option value={92}>Thành phố Cần Thơ</option>
                  <option value={4}>Tỉnh Cao Bằng</option>
                  <option value={64}>Tỉnh Gia Lai</option>
                  <option value={2}>Tỉnh Hà Giang</option>
                  <option value={35}>Tỉnh Hà Nam</option>
                  <option value={1}>Thành phố Hà Nội</option>
                  <option value={42}>Tỉnh Hà Tĩnh</option>
                  <option value={30}>Tỉnh Hải Dương</option>
                  <option value={31}>Thành phố Hải Phòng</option>
                  <option value={93}>Tỉnh Hậu Giang</option>
                  <option value={17}>Tỉnh Hoà Bình</option>
                  <option value={33}>Tỉnh Hưng Yên</option>
                  <option value={56}>Tỉnh Khánh Hòa</option>
                  <option value={91}>Tỉnh Kiên Giang</option>
                  <option value={62}>Tỉnh Kon Tum</option>
                  <option value={12}>Tỉnh Lai Châu</option>
                  <option value={68}>Tỉnh Lâm Đồng</option>
                  <option value={20}>Tỉnh Lạng Sơn</option>
                  <option value={10}>Tỉnh Lào Cai</option>
                  <option value={80}>Tỉnh Long An</option>
                  <option value={36}>Tỉnh Nam Định</option>
                  <option value={40}>Tỉnh Nghệ An</option>
                  <option value={37}>Tỉnh Ninh Bình</option>
                  <option value={58}>Tỉnh Ninh Thuận</option>
                  <option value={25}>Tỉnh Phú Thọ</option>
                  <option value={54}>Tỉnh Phú Yên</option>
                  <option value={44}>Tỉnh Quảng Bình</option>
                  <option value={49}>Tỉnh Quảng Nam</option>
                  <option value={51}>Tỉnh Quảng Ngãi</option>
                  <option value={22}>Tỉnh Quảng Ninh</option>
                  <option value={45}>Tỉnh Quảng Trị</option>
                  <option value={94}>Tỉnh Sóc Trăng</option>
                  <option value={14}>Tỉnh Sơn La</option>
                  <option value={72}>Tỉnh Tây Ninh</option>
                  <option value={34}>Tỉnh Thái Bình</option>
                  <option value={19}>Tỉnh Thái Nguyên</option>
                  <option value={38}>Tỉnh Thanh Hóa</option>
                  <option value={79}>Thành phố Hồ Chí Minh</option>
                  <option value={46}>Tỉnh Thừa Thiên Huế</option>
                  <option value={82}>Tỉnh Tiền Giang</option>
                  <option value={84}>Tỉnh Trà Vinh</option>
                  <option value={8}>Tỉnh Tuyên Quang</option>
                  <option value={86}>Tỉnh Vĩnh Long</option>
                  <option value={26}>Tỉnh Vĩnh Phúc</option>
                  <option value={15}>Tỉnh Yên Bái</option>
                  <option value={48}>Thành phố Đà Nẵng</option>
                  <option value={66}>Tỉnh Đắk Lắk</option>
                  <option value={67}>Tỉnh Đắk Nông</option>
                  <option value={11}>Tỉnh Điện Biên</option>
                  <option value={75}>Tỉnh Đồng Nai</option>
                  <option value={87}>Tỉnh Đồng Tháp</option>
                </select>
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom">
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-diadiem" />
                <select
                  className="dauvao-nhap batbuoc"
                  name="district_id"
                  dl-luu="district_id"
                  dl-select-url="/api/quanhuyen"
                  placeholder="Chọn Quận / Huyện"
                >
                  <option value>-- Chọn Quận/Huyện --</option>
                </select>
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom">
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-diadiem" />
                <select
                  className="dauvao-nhap batbuoc"
                  name="ward_id"
                  dl-luu="ward_id"
                  dl-select-url="/api/phuongxa"
                  placeholder="Chọn Phường / Xã"
                >
                  <option value>-- Chọn Phường / Xã --</option>
                </select>
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom">
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-diadiem" />
                <input
                  className="dauvao-nhap batbuoc"
                  name="village"
                  defaultValue
                  dl-luu="village"
                  type="text"
                  placeholder="Tổ / Khu / Thôn / Xóm"
                  autoComplete="address"
                />
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom">
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-cong-tron" />
                <textarea
                  name="reason_other"
                  className="dauvao-nhap"
                  placeholder="Lý do khám"
                  defaultValue={""}
                />
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom">
              <label>
                <input
                  className="dauvao-nhap"
                  dl-anhien="#baohiem"
                  type="checkbox"
                  name="has_insurrance"
                  dl-luu="has_insurrance"
                />{" "}
                Bạn có sử dụng bảo hiểm (tư nhân)?
              </label>
            </div>
            <div
              className="dauvao-nhom"
              id="baohiem"
              style={{ display: "none" }}
            >
              <p>Chọn công ty bảo hiểm của bạn</p>
              <div className="o-nhap">
                <span className="dauvao-bt bt-g bt-g-cong-tron" />
                <input
                  className="dauvao-nhap"
                  name="insurrance_name"
                  defaultValue
                  dl-luu="insurrance_name"
                  list="insurrances"
                  placeholder="Nhập tên công ty bảo hiểm"
                />
                <datalist id="insurrances">
                  <option value="Công ty TNHH INSMART" />
                  <option value="Tổng công ty Cổ phần Bảo Minh" />
                  <option value="Bảo hiểm Bưu điện (PTI)" />
                  <option value="Tổng công ty Bảo hiểm Dầu khí Việt Nam (PVI)" />
                  <option value="Công ty Bảo hiểm nhân thọ GENERALI " />
                  <option value="Công ty Bảo hiểm VBI (ngân hàng Viettinbank)" />
                  <option value="Công ty Cổ phần Bảo An Khang" />
                  <option value="Công ty Bảo hiểm Bảo Việt" />
                  <option value="Công ty Bảo hiểm Nhân thọ DaiIchi " />
                  <option value="Bảo hiểm Pacific Cross" />
                  <option value="Tổng Công ty Bảo hiểm BIDV (Bic)" />
                  <option value="Bảo hiểm Gras Sayove" />
                  <option value="Tổng Công ty Bảo hiểm toàn cầu (GIC)" />
                  <option value="Bảo hiểm PGICO" />
                  <option value="Bảo hiểm Nhân thọ Prudential" />
                  <option value="Bảo hiểm Liên hiệp" />
                  <option value="Bảo hiểm quân đội MIC" />
                  <option value="Bảo hiểm viễn đông (VASS)" />
                  <option value="Bảo hiểm Samsung Vina" />
                  <option value="Bảo hiểm Xuân Thành" />
                  <option value="Bảo hiểm Manulife Việt Nam" />
                  <option value="Bảo hiểm AIG Việt Nam" />
                  <option value="Bảo hiểm Bảo Việt Tokio Marine" />
                  <option value="Baoviet Interglobal" />
                  <option value="Wellbe Viet Nam" />
                  <option value="Bảo hiểm Nam Á (SAS)" />
                  <option value="Trails of Indochina" />
                  <option value="Asian Assistance (Thailand)" />
                  <option value="Assictance Alliance (International) Co.,Ltd" />
                  <option value="Aetna International Inc " />
                  <option value="Globalhealth" />
                  <option value="Cigna International Corp & Vanbreda" />
                  <option value="Tiecare International" />
                  <option value="Infinity Assist" />
                  <option value="Prestige Pte Ltd" />
                  <option value="Europ Assistance" />
                  <option value="Euro-Center" />
                  <option value="Henner-GMC" />
                  <option value="AXA Assistance Russia" />
                  <option value="Healix" />
                  <option value="William Russel" />
                  <option value="Best Service Group" />
                  <option value="Emergency Assistance Japan" />
                  <option value="Sompo Japan Insurance" />
                  <option value="Aioi Nissay Dowa Insurance" />
                  <option value="JI Accident & Fire Insurance" />
                  <option value="Fuji Fire & Marine" />
                  <option value="Asahi Fire & Marine" />
                  <option value="Sony Assurance" />
                  <option value="ACE Insurance" />
                  <option value="HS Insurance" />
                  <option value="Saison Insurance" />
                  <option value="Bảo hiểm Liberty " />
                  <option value="Bảo hiểm Hùng Vương" />
                  <option value="Bảo hiểm BAKCO" />
                  <option value="Bảo hiểm AIA" />
                  <option value="Bảo hiểm WELLBE" />
                  <option value="B.H Assist " />
                  <option value="Bảo hiểm AIG" />
                  <option value="Vanbreda International" />
                  <option value="Tie Care/ GBG" />
                  <option value="Aetna" />
                  <option value="Euro – center" />
                  <option value="Medical Administrators International" />
                  <option value="Global Asistance & Healthcare" />
                  <option value="SinoMed" />
                  <option value="MSH International" />
                  <option value="AMA" />
                  <option value="EA- CMN" />
                  <option value="GroupaMa" />
                  <option value="EAJ" />
                  <option value="Nissay Dowa Insurance" />
                  <option value="Med-Sure Services" />
                  <option value="Bảo hiểm AON Care" />
                  <option value="Bảo hiểm Marsh" />
                  <option value="Bảo hiểm CarePlus" />
                  <option value="Bảo hiểm FTC" />
                  <option value="Bảo hiểm UIC's" />
                  <option value="Bảo hiểm JLT" />
                  <option value="Bảo hiểm ATACC " />
                  <option value="Bảo hiểm Nhật Bản MSIG" />
                  <option value="Bảo hiểm nhân thọ Prévoir" />
                  <option value="Bảo hiểm Blue Cross Việt Nam " />
                  <option value="Bảo hiểm Korea Life" />
                  <option value="Sime Darby HealthCare " />
                  <option value="Bảo hiểm Chubb " />
                  <option value="Công ty Bảo hiểm Bưu điện Bến Thành" />
                </datalist>
              </div>
              <div className="dauvao-thongbao" />
            </div>
            <div className="dauvao-nhom thanh-toan">
              <p className="tieude-nhom">Hình thức thanh toán</p>
              <label>
                <input
                  className="dauvao-nhap"
                  type="radio"
                  name="pay_type"
                  defaultValue={1}
                  defaultChecked="checked"
                />{" "}
                Thanh toán sau tại cơ sở y tế
              </label>
            </div>
            <div
              className="thanhtoan-noidung"
              id="thanhtoan"
              data-url="/appointment/book/calcAmount?schedule_id=10157799"
            >
              <div>
                <div>Giá khám</div>
                <div id="thanhtoan-giakham">250.000đ</div>
              </div>
              <div>
                <div>Phí đặt lịch</div>
                <div id="thanhtoan-phidatlich">Miễn phí</div>
              </div>
              <hr />
              <div>
                <div>Tổng cộng</div>
                <div id="thanhtoan-tongcong">250.000đ</div>
              </div>
            </div>
            <p className="dauvao-ghichu chu-giua">
              Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời gian
              làm thủ tục khám
            </p>
            <div className="dauvao-canhbao">
              <p style={{ textAlign: "justify" }}>
                <b>LƯU Ý</b>
              </p>
              <p style={{ textAlign: "justify" }}>
                1. Thông tin anh/chị cung cấp sẽ được sử dụng làm hồ sơ khám
                bệnh, khi điền thông tin anh/chị vui lòng:
              </p>
              <ul>
                <li style={{ textAlign: "justify" }}>
                  Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví dụ:
                  <b> Trần Văn Phú&nbsp;</b>
                </li>
                <li style={{ textAlign: "justify" }}>
                  Điền đầy đủ, đúng và vui lòng kiểm tra lại thông tin trước khi
                  ấn "Xác nhận"
                </li>
              </ul>
              <p style={{ textAlign: "justify" }}>
                2. Anh/chị vui lòng tuân thủ quy định phòng chống dịch (đeo khẩu
                trang, khử khuẩn, khai báo dịch tễ) khi đến khám.
              </p>
            </div>
            <button
              className="g-recaptcha nut nut-ngang nut-xanh"
              data-sitekey="6Ld4EaQiAAAAANqQcwhPKOV_rjB8bcNPViS1Ocp4"
              data-callback="submitAppointment"
            >
              Xác nhận đặt khám
            </button>
            <p className="dauvao-ghichu">
              Bằng việc xác nhận đặt khám, bạn đã hoàn toàn đồng ý với{" "}
              <a href="/page/dieu-khoan-su-dung-p7" target="_blank">
                Điều khoản sử dụng
              </a>{" "}
              dịch vụ của chúng tôi.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
