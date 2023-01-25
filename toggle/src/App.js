import "./App.css";
import React from "react";

function App(props) {
  const { coworkers } = props;
  console.log(coworkers);

  return (
    <div className="App">
      <h1>Status Toggler</h1>
    </div>
  );
}

App.defaultProps = {
  coworkers: [
    { first_name: "Vaibhav", last_name: "Matere" },
    { first_name: "Shubham", last_name: "Matere" },
    { first_name: "Deepak", last_name: "Matere" },
  ],
};

export default App;
