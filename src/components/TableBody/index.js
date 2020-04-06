import React from "react";

function TableBody(props) {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.name}</td>
          <td>{props.occupation}</td>
          <td>{props.location}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
        </tr>
      </tbody>
    </>
  );
}

export default TableBody;
