import React from "react";
import usePagination from "./usePagination";

const Pagination = ({ count = 1 }) => {
  const {
    page,
    numPage,
    firstArr,
    lastArr,
    activePage,
    jump,
    nex,
    prev,
    updatePage,
    setUpdatePage,
  } = usePagination({ count: count });


  return (
    <div
      style={{ marginTop: "30px" }}
      className="col-12 d-flex justify-content-center"
    >
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            onClick={() => {
              prev();
            }}
            style={{ cursor: "pointer" }}
            className="page-item"
          >
            <div className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </div>
          </li>

          {firstArr?.map((item) => (
            <li
              onClick={() => {
                jump(item);
              }}
              style={{ cursor: "pointer" }}
              className="page-item"
            >
              <div className={`page-link ${activePage(item)}`} href="#">
                {item}
              </div>
            </li>
          ))}
          {lastArr.length > 0 && (
            <li className="page-item">
              <div className={`page-link`} href="#">
                ...
              </div>
            </li>
          )}
          {lastArr?.map((item) => (
            <li
              onClick={() => {
                jump(item);
              }}
              style={{ cursor: "pointer" }}
              className="page-item"
            >
              <div className={`page-link ${activePage(item)}`} href="#">
                {item}
              </div>
            </li>
          ))}
          <li
            onClick={() => {
              nex();
            }}
            style={{ cursor: "pointer" }}
            className="page-item"
          >
            <div className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
