import React from "react";
import Container from "./components/Container";
import Jumbotron  from "./components/Jumpotron"
import InfoHolder from "./components/InfoHolder";
import EmployeeList from "./components/EmployeeList";
import EmployeeInformation from "./components/EmployeeInformation";
import employee from "./employee.json"
function App() {
  return (
    <Container>
    <Jumbotron />
    <InfoHolder>
      <EmployeeList 
      image={employee[0].image}
      name={employee[0].name}/>
      <EmployeeInformation />
      


    </InfoHolder>
    </Container>
  )
}

export default App;
