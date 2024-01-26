import React, { useState } from 'react';
import './BmiCalculator.css';

const BmiCalculator = () => {
    const [weight, setWeight] = useState(0);``
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(null);

    const calculateBmi = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);
        }
    };

    return (
        <div className="bmi-calculator">
            <h2>BMI Calculator</h2>
            <div>
                <label htmlFor="weight">Weight (kg): </label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    min="0"
                />
            </div>
            <div>
                <label htmlFor="height">Height (cm): </label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    min="0"
                />
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            {bmi && (
                <div>
                    <h3>Your BMI: {bmi}</h3>
                    <p>
                        Interpretation: {bmi < 18.5 ? 'Underweight' : bmi < 24.9 ? 'Normal weight' : 'Overweight'}
                    </p>
                </div>
            )}
        </div>
    );
};

export default BmiCalculator;

