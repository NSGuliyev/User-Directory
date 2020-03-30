import React from "react";
import "../EmployeeInfoCard/index.css"

function EmployeeInfoCard() {
    return (
        <>
            <div className="card-body">
                <div className="col-md-12" >
                    <img src="https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png" className="center card-img" alt="..." />
                </div>
                <p className="card-text">Name:</p>
                <p className="card-text">Occupation:</p>
                <p className="card-text">Location:</p>
                <p className="card-text">e-mail:</p>
                <p className="card-text">Phone:</p>
            </div>
        </>

    )
}

export default EmployeeInfoCard;