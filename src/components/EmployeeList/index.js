import React from "react";

function EmployeeList(props) {
    return (
        <div className="col-6">
            <div className="card mb-4">

                <div className="card-header">
                    <h3 className="d-flex justify-content-center">List of Employees</h3>
                </div>


                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className=" col form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>

                <div className="card-body">
                    <div className="card col-12" style={{ width: 540, marginTop: 10 }}>
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
                
            </div>
        </div>
    )
}
export default EmployeeList;