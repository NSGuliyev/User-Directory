import React from "react";
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



function App() {
  return (
    <Container>
      <Jumbotron />
      <InfoHolder>
        <EmployeeList>
          <EmpListHeader />
          <Search />
          <EmployeeCard
            image={employee[0].image}
            name={employee[0].name} />
          <EmployeeCard
            image={employee[1].image}
            name={employee[1].name} />
          <EmployeeCard
            image={employee[2].image}
            name={employee[2].name} />
          <EmployeeCard
            image={employee[3].image}
            name={employee[3].name} />
        </EmployeeList>


        <EmployeeInformation>
          <EmployeeInfoHeader />
          <EmployeeInfoCard />

        </EmployeeInformation>



      </InfoHolder>
    </Container>
  )
}

export default App;
