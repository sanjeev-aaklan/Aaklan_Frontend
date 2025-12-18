// components/Career/SuccessMessage.js
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SuccessMessage = ({ selectedJob, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
          <FaCheck className="text-2xl text-green-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-[#0b234a] mb-4">Application Submitted!</h2>
        
        <p className="text-gray-600 mb-2">
          Thank you for applying for the <span className="font-semibold text-orange-500">{selectedJob?.title}</span> position.
        </p>
        
        <p className="text-gray-600 mb-6">
          We've received your application and will review it carefully. Our HR team will contact you within 5-7 business days.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-700">
            <strong>Next Steps:</strong> Check your email for a confirmation and keep an eye on your inbox for updates.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Browse Other Positions
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;