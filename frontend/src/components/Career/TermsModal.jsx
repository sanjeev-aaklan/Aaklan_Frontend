// components/Career/TermsModal.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const TermsModal = ({ selectedJob, agreeToTerms, setAgreeToTerms, onClose, onAgree }) => {

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-white/10 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">

        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#0b234a]">Terms & Instructions</h2>

          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-1">
              Application Instructions for: {selectedJob?.title}
            </h3>
          </div>

          {/* STYLED & FORMATTED INSTRUCTION */}
          <div
            className="
              text-gray-700 text-sm leading-7 
              whitespace-pre-wrap 
              bg-gray-50 
              border border-gray-200 
              p-5 rounded-lg 
              shadow-sm 
              font-[500]
              tracking-wide
            "
          >
            {selectedJob?.instruction || "No instructions available for this job."}
          </div>

          {/* Agreement */}
          <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-1 h-4 w-4 text-orange-500"
            />

            <label htmlFor="agreeTerms" className="text-sm text-gray-700">
              I have read and understood the provided instructions for this job.
            </label>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={onAgree}
            disabled={!agreeToTerms}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold ${
              agreeToTerms
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Agree & Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default TermsModal;
