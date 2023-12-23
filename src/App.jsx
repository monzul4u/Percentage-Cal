
import { useState } from 'react';
import './App.css';

// ... (other imports)

const PercentageCalculator = () => {
  const [totalAmount, setTotalAmount] = useState('100');
  const [percentage, setPercentage] = useState('10');
  const [result, setResult] = useState(null);
  const [sumResult, setSumResult] = useState(null);
  const [subtractResult, setSubtractResult] = useState(null);

  const calculatePercentage = () => {
    const parsedTotal = parseFloat(totalAmount);
    const parsedPercentage = parseFloat(percentage);

    if (!isNaN(parsedTotal) && !isNaN(parsedPercentage)) {
      const calculatedResult = (parsedTotal * parsedPercentage) / 100;
      setResult(calculatedResult.toFixed(2));

      const calculatedSumResult = parsedTotal + calculatedResult;
      setSumResult(calculatedSumResult.toFixed(2));

      const calculatedSubtractResult = parsedTotal - calculatedResult/102.5 * 100;
      setSubtractResult(calculatedSubtractResult.toFixed());
    } else {
      setResult(null);
      setSumResult(null);
      setSubtractResult(null);
    }
  };

  return (
    <div className="percentage-calculator">
      <h1>Percentage Calculator</h1>
      <div className="input-group">
        <label>Total Amount:</label>
        <input
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Percentage:</label>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
      </div>
      <button onClick={calculatePercentage}>Calculate</button>
      {result !== null && (
        <div className="result">
          <p>Result:</p>
          <p>Total Amount with {percentage}% is {result}</p>
        </div>
      )}
      {sumResult !== null && (
        <div className="result">
          <p>Sum Result:</p>
          <p>Total Amount + {percentage}% is {sumResult}</p>
        </div>
      )}
      {subtractResult !== null && (
        <div className="result">
          <p>Subtraction Result:</p>
          <p>Total Amount - {percentage}% is {subtractResult}</p>
        </div>
      )}
    </div>
  );
};

// ... (rest of the code remains the same)


function App() {
  return (
    <div className="App">
      <PercentageCalculator />
    </div>
  );
}

export default App;
