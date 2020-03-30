import React from "react";

function EmployeeList(props) {
    return (
        <div className="col-6">
            <div className="card mb-4">

            {props.children}


               

               

            </div>
        </div>
    )
}
export default EmployeeList;