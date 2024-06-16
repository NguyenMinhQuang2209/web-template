import React from "react";
import { Link } from "react-router-dom";

const StoreownerConfirm = () => {
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
                    <th style={{ width: "40%" }}>Người gửi</th>
                    <th style={{ width: "30%" }}>Ngày gửi yêu cầu</th>
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
                    <td className="border-bottom-0-custom">
                      <button
                        style={{ height: "30px", fontSize: "12px" }}
                        type="button"
                        className="btn btn-danger"
                      >
                        Thông tin
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
                        Hủy yêu cầu
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

export default StoreownerConfirm;
