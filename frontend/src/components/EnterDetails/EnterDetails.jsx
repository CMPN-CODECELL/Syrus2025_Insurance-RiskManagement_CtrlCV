import React, { useState } from "react";
import "./EnterDetails.css"

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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Insurance Risk Assessment Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="border p-2 rounded w-full" required />
          <input type="date" name="dob" onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <select name="gender" onChange={handleChange} className="border p-2 rounded w-full" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="text" name="occupation" placeholder="Occupation" onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>
        <input type="number" name="income" placeholder="Annual Income (₹)" onChange={handleChange} className="border p-2 rounded w-full" required />

        {/* Lifestyle & Health Info */}
        <fieldset className="border p-4 rounded">
          <legend className="font-semibold">Lifestyle & Health</legend>
          <div className="grid grid-cols-2 gap-4">
            <select name="smoke" onChange={handleChange} className="border p-2 rounded w-full">
              <option value="no">Do you smoke? (No)</option>
              <option value="yes">Yes</option>
            </select>
            <select name="alcohol" onChange={handleChange} className="border p-2 rounded w-full">
              <option value="no">Do you drink alcohol? (No)</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} className="border p-2 rounded w-full mt-2" />
          <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} className="border p-2 rounded w-full mt-2" />
        </fieldset>

        {/* Fitbit Integration */}
        <fieldset className="border p-4 rounded">
          <legend className="font-semibold">Fitness Tracker</legend>
          <select name="fitbitConnected" onChange={handleChange} className="border p-2 rounded w-full">
            <option value="no">Connect Fitbit? (No)</option>
            <option value="yes">Yes</option>
          </select>
        </fieldset>

        {/* Insurance Preferences */}
        <fieldset className="border p-4 rounded">
          <legend className="font-semibold">Insurance Preferences</legend>
          <select name="coverageAmount" onChange={handleChange} className="border p-2 rounded w-full">
            <option value="2L">₹2L</option>
            <option value="5L">₹5L</option>
            <option value="10L">₹10L</option>
            <option value="custom">Custom</option>
          </select>
          <select name="paymentMode" onChange={handleChange} className="border p-2 rounded w-full mt-2">
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Submit & Calculate Risk Score
        </button>
      </form>
    </div>
  );
};

export default EnterDetails;