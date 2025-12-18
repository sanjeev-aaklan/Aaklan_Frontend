import { useState } from 'react';

const OfferModel = () => {
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [offerFormData, setOfferFormData] = useState({
    name: '',
    role: '',
    dateOfJoining: '',
    probationPeriod: '6 months',
    payCycleFrom: '1st',
    payCycleTo: '30th/31st',
    ctc: '',
    basicSalary: '',
    houseRentAllowance: '',
    providentFund: '',
    securityAmount: '',
    netSalary: ''
  });

  // Open modal and set applicant data
  const openOfferModal = (applicant) => {
    setSelectedApplicant(applicant);
    // Pre-fill form with applicant data
    setOfferFormData({
      name: applicant.name,
      role: applicant.appliedPosition,
      dateOfJoining: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB'),
      probationPeriod: '6 months',
      payCycleFrom: '1st',
      payCycleTo: '30th/31st',
      ctc: '',
      basicSalary: '',
      houseRentAllowance: '',
      providentFund: '',
      securityAmount: '',
      netSalary: ''
    });
    setShowOfferModal(true);
  };

  // Close modal
  const closeOfferModal = () => {
    setShowOfferModal(false);
    setSelectedApplicant(null);
    setOfferFormData({
      name: '',
      role: '',
      dateOfJoining: '',
      probationPeriod: '6 months',
      payCycleFrom: '1st',
      payCycleTo: '30th/31st',
      ctc: '',
      basicSalary: '',
      houseRentAllowance: '',
      providentFund: '',
      securityAmount: '',
      netSalary: ''
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOfferFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle final offer submission
  const handleOfferSubmit = () => {
    if (selectedApplicant) {
      handleNextStage(selectedApplicant._id, "offered", offerFormData);
      closeOfferModal();
    }
  };

  // Your existing handleNextStage function (modified to accept offerData)
  const handleNextStage = async (applicantId, status, offerData = {}) => {
    try {
      const response = await fetch(`/api/applicants/${applicantId}/next-stage`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status,
          ...offerData
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Show success message or refresh data
        console.log('Offer sent successfully:', data.message);
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error sending offer:', error);
    }
  };

  return (
    <div>
      {/* Your existing table */}
      <table>
        {/* Table headers */}
        <tbody>
          {applicants.map((app) => (
            <tr key={app._id}>
              {/* Other table cells */}
              <td>
                <button
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  onClick={() => openOfferModal(app)}
                >
                  Offer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Offer Modal */}
      {showOfferModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-3 border-b">
                <h3 className="text-xl font-bold text-gray-900">
                  Create Offer Letter for {selectedApplicant?.name}
                </h3>
                <button
                  onClick={closeOfferModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="mt-4 max-h-96 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Personal Details */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-gray-800">Personal Details</h4>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Candidate Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={offerFormData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Role/Position
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={offerFormData.role}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Joining
                      </label>
                      <input
                        type="date"
                        name="dateOfJoining"
                        value={offerFormData.dateOfJoining}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Probation Period
                      </label>
                      <select
                        name="probationPeriod"
                        value={offerFormData.probationPeriod}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="3 months">3 Months</option>
                        <option value="6 months">6 Months</option>
                        <option value="1 year">1 Year</option>
                      </select>
                    </div>
                  </div>

                  {/* Salary Details */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-gray-800">Salary Details</h4>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CTC (Cost to Company)
                      </label>
                      <input
                        type="text"
                        name="ctc"
                        value={offerFormData.ctc}
                        onChange={handleInputChange}
                        placeholder="₹25,000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Basic Salary
                      </label>
                      <input
                        type="text"
                        name="basicSalary"
                        value={offerFormData.basicSalary}
                        onChange={handleInputChange}
                        placeholder="₹12,000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        House Rent Allowance (HRA)
                      </label>
                      <input
                        type="text"
                        name="houseRentAllowance"
                        value={offerFormData.houseRentAllowance}
                        onChange={handleInputChange}
                        placeholder="₹3,000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Provident Fund (PF)
                      </label>
                      <input
                        type="text"
                        name="providentFund"
                        value={offerFormData.providentFund}
                        onChange={handleInputChange}
                        placeholder="₹1,500"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Security Amount
                      </label>
                      <input
                        type="text"
                        name="securityAmount"
                        value={offerFormData.securityAmount}
                        onChange={handleInputChange}
                        placeholder="₹500"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Net Salary
                      </label>
                      <input
                        type="text"
                        name="netSalary"
                        value={offerFormData.netSalary}
                        onChange={handleInputChange}
                        placeholder="₹17,000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Pay Cycle Details */}
                <div className="mt-6 border-t pt-4">
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Pay Cycle Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pay Cycle From
                      </label>
                      <select
                        name="payCycleFrom"
                        value={offerFormData.payCycleFrom}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="1st">1st</option>
                        <option value="26th">26th</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pay Cycle To
                      </label>
                      <select
                        name="payCycleTo"
                        value={offerFormData.payCycleTo}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="25th">25th</option>
                        <option value="30th/31st">30th/31st</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end space-x-3 pt-4 mt-4 border-t">
                <button
                  onClick={closeOfferModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOfferSubmit}
                  className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  Send Offer Letter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferModel;