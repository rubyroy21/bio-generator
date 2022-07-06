import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [major, setMajor] = useState("");
  const [school, setSchool] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleInputMajor = (e) => {
    setMajor(e.target.value);
  };

  const handleInputSchool = (e) => {
    setSchool(e.target.value);
  };

  return (
    <div className="App">
      <h1>Bio - Generator</h1>
      <div className="container">
        <div className="option">
          <h2>Options</h2>
          <h3>Name</h3>
          <input
            type="text"
            placeholder="Enter name"
            onChange={handleInputName}
          />
          <br />
          <h3>Location</h3>
          <input
            type="text"
            placeholder="Enter location"
            onChange={handleInputLocation}
          />
          <br />
          <div className="education">
            <br />
            <h3>School</h3>
            <input
              type="text"
              placeholder="Enter School/Institute Name"
              onChange={handleInputSchool}
            />
            <h3>Major</h3>
            <input
              type="text"
              placeholder="Enter Specialization"
              onChange={handleInputMajor}
            />
          </div>
        </div>
        <div className="result">
          <h2>Results</h2>
          <h3>
            {name} is from the {location}. She is studying {major} at {school}.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
