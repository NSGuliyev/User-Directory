import React from "react";

function TableHead(props) {
  return (
    <>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name <i className="fas fa-sort-down" id="sortBtn" onClick={props.handleSort}></i></th>
          <th scope="col">Occupation</th>
          <th scope="col">Location</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHead;
