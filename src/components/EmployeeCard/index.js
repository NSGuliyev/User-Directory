import React from "react";

function EmployeeListCard(props) {
    return (
        <>
            <div className="card-body">
                <div className="card col-12">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <img src={props.image} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">{props.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeListCard