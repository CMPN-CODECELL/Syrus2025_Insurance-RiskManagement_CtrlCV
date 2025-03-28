import React, { useState } from "react";
import "./EnterDetails.css";

const EnterDetails = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    occupation: "",
    income: "",
    smoke: "no",
    alcohol: "no",
    exercise: "no",
    medicalConditions: "",
    height: "",
    weight: "",
    surgeries: "no",
    familyHistory: "",
    fitbitConnected: "no",
    stepsPerDay: "",
    heartRate: "",
    sleepHours: "",
    fitnessEvents: "no",
    gymMembership: "no",
    coverageAmount: "2L",
    paymentMode: "monthly",
    healthCheckup: "no"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🏥 Insurance Risk Assessment
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              name="fullName" 
              placeholder="Full Name" 
              onChange={handleChange} 
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" 
              required 
            />
            <input 
              type="date" 
              name="dob" 
              onChange={handleChange} 
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select name="gender" onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="text" name="occupation" placeholder="Occupation" onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" required />
          </div>

          <input type="number" name="income" placeholder="Annual Income (₹)" onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" required />

          {/* Lifestyle & Health */}
          <fieldset className="border p-5 rounded-lg bg-gray-50">
            <legend className="font-semibold text-gray-700">🩺 Lifestyle & Health</legend>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <select name="smoke" onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400">
                <option value="no">Do you smoke? (No)</option>
                <option value="yes">Yes</option>
              </select>
              <select name="alcohol" onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400">
                <option value="no">Do you drink alcohol? (No)</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} className="border p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-400" />
            <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} className="border p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-400" />
          </fieldset>

          {/* Fitbit Integration */}
          <fieldset className="border p-5 rounded-lg bg-gray-50">
            <legend className="font-semibold text-gray-700">📲 Fitness Tracker</legend>
            <select name="fitbitConnected" onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 mt-2">
              <option value="no">Connect Fitbit? (No)</option>
              <option value="yes">Yes</option>
            </select>
          </fieldset>

          {/* Insurance Preferences */}
          <fieldset className="border p-5 rounded-lg bg-gray-50">
            <legend className="font-semibold text-gray-700">📑 Insurance Preferences</legend>
            <select name="coverageAmount" onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 mt-2">
              <option value="2L">₹2L</option>
              <option value="5L">₹5L</option>
              <option value="10L">₹10L</option>
              <option value="custom">Custom</option>
            </select>
            <select name="paymentMode" onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 mt-2">
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </fieldset>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
            🚀 Submit & Calculate Risk Score
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnterDetails;
