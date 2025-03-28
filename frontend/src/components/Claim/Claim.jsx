import React, { useState } from "react";
import { FileUp, FileText, CheckCircle } from 'lucide-react';

const Claim = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formData, setFormData] = useState({
    claimNumber: "",
    documentType: "",
    additionalNotes: "",
  });

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);

    const fileData = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setUploadedFiles((prevFiles) => [...prevFiles, ...fileData]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      documents: uploadedFiles.map((file) => file.file),
    };

    console.log("Submission Data:", submissionData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-blue-600 text-white p-6 text-center">
          <FileText className="mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-bold">
            Insurance Claim Document Upload
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Claim Number */}
          <div>
            <label 
              htmlFor="claimNumber" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Claim Number
            </label>
            <input
              type="text"
              id="claimNumber"
              name="claimNumber"
              value={formData.claimNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter claim number"
            />
          </div>

          {/* Document Type */}
          <div>
            <label 
              htmlFor="documentType" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Document Type
            </label>
            <select
              id="documentType"
              name="documentType"
              value={formData.documentType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Document Type</option>
              <option value="medical_bill">Medical Bill</option>
              <option value="police_report">Police Report</option>
              <option value="repair_estimate">Repair Estimate</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label 
              htmlFor="fileUpload" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Documents
            </label>
            <div className="flex items-center justify-center w-full">
              <label 
                htmlFor="fileUpload" 
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FileUp className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PDF, PNG, JPG or DOCX</p>
                </div>
                <input
                  type="file"
                  id="fileUpload"
                  onChange={handleFileUpload}
                  multiple
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Preview Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h3 className="font-semibold mb-2 text-gray-700">Uploaded Files:</h3>
              {uploadedFiles.map((file, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between mb-2 p-2 bg-white rounded-md shadow-sm"
                >
                  <div className="flex items-center">
                    <img
                      src={file.url}
                      alt={`Uploaded file ${index + 1}`}
                      className="w-10 h-10 object-cover mr-3 rounded"
                    />
                    <span className="text-sm text-gray-700 truncate max-w-[200px]">
                      {file.file.name}
                    </span>
                  </div>
                  <CheckCircle className="text-green-500" size={20} />
                </div>
              ))}
            </div>
          )}

          {/* Additional Notes */}
          <div>
            <label 
              htmlFor="additionalNotes" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter any additional information"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-102 flex items-center justify-center"
          >
            <CheckCircle className="mr-2" size={20} />
            Submit Claim Documents
          </button>
        </form>
      </div>
    </div>
  );
};

export default Claim;