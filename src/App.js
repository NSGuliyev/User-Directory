import React, { Component } from "react";
import Container from "./components/Container";
import Jumbotron from "./components/Jumpotron"
import InfoHolder from "./components/InfoHolder";
import EmployeeList from "./components/EmployeeList";
import EmployeeInformation from "./components/EmployeeInformation";
import employee from "./employee.json"
import EmpListHeader from "./components/EmpListHeader";
import Search from "./components/Search";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeInfoHeader from "./components/EmployeeInfoHeader"
import EmployeeInfoCard from "./components/EmployeeInfoCard";



class App extends Component {

  state = { employee };

  render() {
    return (
      <Container>
        <Jumbotron />
        <InfoHolder>

          <EmployeeList>
            <EmpListHeader />
            <Search />

            {this.state.employee.map(employees => (
              <EmployeeCard
                image={employees.image}
                name={employees.name}
              />
            ))}
          </EmployeeList>

          <EmployeeInformation>
            <EmployeeInfoHeader />
            <EmployeeInfoCard />

          </EmployeeInformation>



        </InfoHolder>
      </Container>
    )
  }
}

export default App;