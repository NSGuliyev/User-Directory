import React from "react";
import Container from "./components/Container";
import Jumbotron  from "./components/Jumpotron"
import InfoHolder from "./components/InfoHolder";
import EmployeeList from "./components/EmployeeList";
import EmployeeInformation from "./components/EmployeeInformation";

function App() {
  return (
    <Container>
    <Jumbotron />
    <InfoHolder>
      <EmployeeList />
      <EmployeeInformation />
      


    </InfoHolder>
    </Container>
  )
}

export default App;
