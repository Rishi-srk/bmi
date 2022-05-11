import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import '../src/App1.css';

export default function App() {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);


  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid){
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi.toFixed(3));
  };

  return (
    <div className="">
      <div className="justify-content-center m-5">
      <h1 className="text-center">BMI CALCULATOR</h1>
      </div>
      <form onSubmit={calculate} className="">
        <div className="mb-3 container">
          <label className="form-label"><h5>Height in meters</h5></label>
          <input type="number" value={height} className="form-control" onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div className="container mb-3">
          <label className="form-label"><h5>Mass in kg</h5></label>
          <input   type="number" value={mass} onChange={(e) => setMass(e.target.value)} className="form-control" />
        </div>
        <div className="justify-content-center  text-center mt-4">
        <button type="submit" className="btn btn-primary ms-5 justify-content-center">Calculate BMI</button>
        </div>
      </form>
      <h1 className="text-center mt-5 ms-2">BMI : {bmi}</h1>

      {
        (bmi<=18.5 && bmi!=0)?<h2 className="text-center mt-5">UnderWeight</h2>:(bmi<=24.9 && bmi!=0 ?<h2 className="text-center mt-5">Normal</h2>:(bmi<=29.9 && bmi!=0? <h2 className="text-center mt-5">Overweight</h2>:(bmi>=30?<h2 className="text-center mt-5">obesity</h2>:<h1></h1>))  )
      }
    </div>
  );
}