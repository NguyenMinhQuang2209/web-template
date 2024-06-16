import React from "react";
import { Link } from "react-router-dom";
import CommonService from "../service/CommonService";
const Payment = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      ></div>
      <section style={{ marginTop: "15px" }} className="ftco-section">
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table table-responsive-xl">
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>ID</th>
                    <th style={{ width: "30%" }}>Người gửi</th>
                    <th style={{ width: "15%" }}>Ngày gửi yêu cầu</th>
                    <th style={{ width: "10%" }}>Gói thanh toán</th>
                    <th style={{ width: "15%" }}>Giá mua</th>
                    <th style={{ width: "20%" }}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="alert" role="alert">
                    <td className="border-bottom-0-custom">1</td>
                    <td className="d-flex align-items-center border-bottom-0-custom">
                      <div className="img">
                        <img
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                          src="https://res.cloudinary.com/sttruyen/image/upload/v1716255380/m4fomykpo7ycgccepee9.jpg"
                        />
                      </div>
                      <div className="pl-3 email">
                        <span>
                          <Link to={`/user/profile`}>Minh Quang</Link>
                        </span>
                        <span>2 phút trước</span>
                      </div>
                    </td>
                    <td className="border-bottom-0-custom">20/10/2022</td>
                    <td className="border-bottom-0-custom">Cơ bản</td>
                    <td className="border-bottom-0-custom">
                      {CommonService.formatNumberWithDots(200000)} VND
                    </td>
                    <td className="border-bottom-0-custom">
                      <button
                        style={{ height: "30px", fontSize: "12px" }}
                        type="button"
                        className="btn btn-danger"
                      >
                        Xác nhận
                      </button>
                      <button
                        style={{
                          marginLeft: "5px",
                          height: "30px",
                          fontSize: "12px",
                        }}
                        type="button"
                        className="btn btn-secondary"
                      >
                        Từ chối
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
