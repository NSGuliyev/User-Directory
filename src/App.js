import React, { Component } from "react";
import Container from "./components/Container";
import Jumbotron from "./components/Jumpotron";
import InfoHolder from "./components/InfoHolder";
import EmployeeList from "./components/EmployeeList";
import employee from "./employee.json";
import EmpListHeader from "./components/EmpListHeader";
import Table from "./components/Table";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";

class App extends Component {
  state = { employee, search: "" };

  updateSearch (event) {
    this.setState({search: event.target.value.substr(0,18)})
  }

  render() {
    let filteredEmployee = this.state.employee.filter(
      (em)=> {
        return em.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
    return (
      <Container>
        <Jumbotron />
        <InfoHolder>
          <EmployeeList>
            <EmpListHeader />
            <>
              <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                  <input
                    className=" col form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </nav>
            </>

            <Table>
              <TableHead />
              {filteredEmployee.map((employees) => (
                <TableBody
                  image={employees.image}
                  id={employees.id}
                  name={employees.name}
                  occupation={employees.occupation}
                  location={employees.location}
                  email={employees.email}
                  phone={employees.phone}
                /> 
              ))}
            </Table>
          </EmployeeList>
        </InfoHolder>
      </Container>
    );
  }
}

export default App;
