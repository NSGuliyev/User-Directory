import React from "react";

function EmployeeInformation(props) {
    return (
        <div className="col-6">
            <div className="card mb">

                {props.children}

            </div>
        </div>
    )
}

export default EmployeeInformation;