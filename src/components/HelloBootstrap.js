import React from "react";


const styles = {
  picture: {
    width: 540,
    marginTop: 10

  }
};

function HelloBootstrap() {
  return (
    <div className="container">

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-danger d-flex justify-content-center"> Welcome to Employee Directory</h1>
        </div>
      </div>

      <div className="row">

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



              <div className="card col-12" style={styles.picture}>
                <div className="row no-gutters">
                  <div className="col-md-2">
                    <img src="https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Franz Josef Popp</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card col-12" style={styles.picture}>
                <div className="row no-gutters">
                  <div className="col-md-2">
                    <img src="https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card col-12" style={styles.picture}>
                <div className="row no-gutters">
                  <div className="col-md-2">
                    <img src="..." className="card-img" alt="..." />
                  </div>
                  <div className="col-md-4">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card col-12" style={styles.picture}>
                <div className="row no-gutters">
                  <div className="col-md-2">
                    <img src="..." className="card-img" alt="..." />
                  </div>
                  <div className="col-md-4">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>




        <div className="col-6">
          <div className="card mb-4">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Employee Information</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Card content</p>
            </div>
          </div>
        </div>






      </div>
    </div>
  );
}

export default HelloBootstrap;
