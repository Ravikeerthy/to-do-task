import React from "react";

const Filtering = ({ handleViewChange }) => {
  return (
    <>
      <div className="Container mt-5">
        <div className="d-flex justify-content-between">
          <h3 className="d-sm-inline-flex">My ToDos</h3>

          <div className="d-flex">
            <h3 className="me-2">Status:</h3>
            <select
              onChange={handleViewChange}
              className="btn btn-info dropdown-toggle"
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filtering;
