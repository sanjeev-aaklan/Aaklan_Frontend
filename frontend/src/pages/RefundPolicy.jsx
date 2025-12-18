import React, { useState } from 'react';
import { FaMoneyBillWave, FaTimesCircle, FaUndo, FaClock, FaCreditCard, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FaShieldAlt },
    { id: 'cancellation', title: 'Cancellation Policy', icon: FaTimesCircle },
    { id: 'refund', title: 'Refund Policy', icon: FaUndo },
    { id: 'process', title: 'Refund Process', icon: FaMoneyBillWave }
  ];

  const refundTimeline = [
    { time: 'Within 24 hours', action: 'Refund request processed', status: 'Fast' },
    { time: '3-5 business days', action: 'Amount credited to source', status: 'Standard' },
    { time: '7 business days', action: 'International transactions', status: 'Extended' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0b234a] to-[#1a3a6e] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <FaMoneyBillWave className="text-2xl text-orange-500" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Refund & Cancellation Policy</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Your satisfaction is our priority. Learn about our refund and cancellation procedures.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#0b234a] flex items-center gap-2">
                  <FaShieldAlt className="text-[#E22213]" />
                  Policy Sections
                </h3>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium flex items-center gap-3 ${
                            activeSection === section.id
                              ? 'bg-orange-500 text-white shadow-md'
                              : 'text-gray-700 hover:bg-orange-50 hover:text-[#0b234a]'
                          }`}
                        >
                          <IconComponent className="text-sm flex-shrink-0" />
                          {section.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Quick Info */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0b234a] mb-2">Quick Support</h4>
                  <p className="text-sm text-gray-700">
                    Need immediate assistance? Contact our support team for help with refunds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="border-b border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    {(() => {
                      const SectionIcon = sections.find(s => s.id === activeSection)?.icon || FaShieldAlt;
                      return <SectionIcon className="text-orange-500 text-lg" />;
                    })()}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0b234a]">
                      {sections.find(s => s.id === activeSection)?.title}
                    </h2>
                    <p className="text-gray-600">Last updated: December 2024</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Introduction Section */}
                {activeSection === 'introduction' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                        <p className="text-gray-700">
                          Our focus is complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the money, provided the reasons are genuine and proved after investigation.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-[#0b234a] mb-3 flex items-center gap-2">
                          <FaShieldAlt className="text-[#E22213]" />
                          Important Notice
                        </h4>
                        <p className="text-gray-700">
                          Please read the fine prints of each deal before buying it, it provides all the details about the services you purchase.
                        </p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-[#0b234a] mb-3">Customer Satisfaction Guarantee</h4>
                        <p className="text-gray-700">
                          In case of dissatisfaction from our services, clients have the liberty to cancel their projects and request a refund from us. Our Policy for the cancellation and refund will be as follows:
                        </p>
                      </div>
                    </div>

                    {/* Key Points Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div className="w-12 h-12 bg-[#0b234a] rounded-lg flex items-center justify-center mb-4">
                          <FaTimesCircle className="text-white text-xl" />
                        </div>
                        <h4 className="font-bold text-[#0b234a] mb-2">Easy Cancellation</h4>
                        <p className="text-gray-600 text-sm">
                          Simple and straightforward cancellation process for all services
                        </p>
                      </div>
                      <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                          <FaUndo className="text-white text-xl" />
                        </div>
                        <h4 className="font-bold text-[#0b234a] mb-2">Quick Refunds</h4>
                        <p className="text-gray-600 text-sm">
                          Fast refund processing for eligible cases after thorough investigation
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cancellation Policy Section */}
                {activeSection === 'cancellation' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-6">Cancellation Procedure</h3>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-[#0b234a] mb-3 flex items-center gap-2">
                          <FaTimesCircle className="text-[#E22213]" />
                          How to Cancel
                        </h4>
                        <p className="text-gray-700">
                          For Cancellations please contact us via contact us page.
                        </p>
                      </div>

                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                        <h4 className="font-semibold text-[#0b234a] mb-2">Important Timeline</h4>
                        <p className="text-gray-700">
                          Requests received later than 3 business days prior to the start of the current service period will be treated as cancellation of services for the next service period.
                        </p>
                      </div>

                      {/* Cancellation Timeline */}
                      <div className="bg-gray-50 rounded-xl p-6 mt-8">
                        <h4 className="font-bold text-[#0b234a] mb-4 text-center">Cancellation Timeline</h4>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <FaClock className="text-green-500" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-[#0b234a]">Within 3 Business Days</h5>
                              <p className="text-gray-600 text-sm">Full cancellation with possible refund eligibility</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <FaClock className="text-yellow-500" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-[#0b234a]">After 3 Business Days</h5>
                              <p className="text-gray-600 text-sm">Cancellation applies to next service period</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Refund Policy Section */}
                {activeSection === 'refund' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-6">Refund Eligibility & Terms</h3>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                        <p className="text-gray-700">
                          We will try our best to create the suitable design concepts for our clients. In case any client is not completely satisfied with our services we can provide a refund.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white border border-green-200 rounded-xl p-6">
                          <h4 className="font-bold text-[#0b234a] mb-3 flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" />
                            Eligible for Refund
                          </h4>
                          <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• Genuine dissatisfaction cases</li>
                            <li>• Service quality issues</li>
                            <li>• Undelivered services</li>
                            <li>• Technical limitations</li>
                          </ul>
                        </div>
                        <div className="bg-white border border-red-200 rounded-xl p-6">
                          <h4 className="font-bold text-[#0b234a] mb-3 flex items-center gap-2">
                            <FaTimesCircle className="text-red-500" />
                            Not Eligible for Refund
                          </h4>
                          <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• Multiple demo classes taken</li>
                            <li>• Change of mind after service</li>
                            <li>• Failure to provide requirements</li>
                            <li>• Completed services</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-[#0b234a] mb-2">Important Refund Conditions</h4>
                        <p className="text-gray-700 text-sm">
                          Refunds will be eligible only to limited services. As an example you won't eligible for refund if you had taken more than one demo of any particular service. As we don't have fixed syllabus for demo classes they can provide different chapters of subjects.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                        <h4 className="font-semibold text-[#0b234a] mb-2">Investigation Process</h4>
                        <p className="text-gray-700 text-sm">
                          Refunds will be initiated only after full investigation of your activity on our Website "Aaklan" and satisfaction with refund request.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Refund Process Section */}
                {activeSection === 'process' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-6">Refund Process & Methods</h3>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                        <h4 className="font-semibold text-[#0b234a] mb-3 flex items-center gap-2">
                          <FaCreditCard className="text-[#E22213]" />
                          Refund Payment Methods
                        </h4>
                        <p className="text-gray-700">
                          If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payment gateway name payments refund will be made to the same account.
                        </p>
                      </div>

                      {/* Refund Timeline */}
                      <div className="mb-8">
                        <h4 className="font-bold text-[#0b234a] mb-6 text-center">Expected Refund Timeline</h4>
                        <div className="space-y-4">
                          {refundTimeline.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                                item.status === 'Fast' ? 'bg-green-100' : 
                                item.status === 'Standard' ? 'bg-blue-100' : 'bg-orange-100'
                              }`}>
                                <FaClock className={
                                  item.status === 'Fast' ? 'text-green-500' : 
                                  item.status === 'Standard' ? 'text-blue-500' : 'text-orange-500'
                                } />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-[#0b234a]">{item.time}</h5>
                                <p className="text-gray-600 text-sm">{item.action}</p>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                item.status === 'Fast' ? 'bg-green-100 text-green-800' : 
                                item.status === 'Standard' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                              }`}>
                                {item.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Refund Steps */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#0b234a] mb-6 text-center">Refund Process Steps</h4>
                        <div className="space-y-4">
                          {[
                            { step: 1, title: 'Submit Request', desc: 'Contact us with refund reason' },
                            { step: 2, title: 'Investigation', desc: 'We review your case thoroughly' },
                            { step: 3, title: 'Approval', desc: 'Refund approved if eligible' },
                            { step: 4, title: 'Processing', desc: 'Amount credited to source' }
                          ].map((step) => (
                            <div key={step.step} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                {step.step}
                              </div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-[#0b234a]">{step.title}</h5>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Support Banner */}
            <div className="mt-8 bg-gradient-to-r from-[#0b234a] to-[#1a3a6e] text-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Need Help with Refund?</h3>
                  <p className="text-blue-100">
                    Our support team is here to help you with any refund or cancellation queries.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    Contact Support
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-[#0b234a] px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Check Status
                  </button>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0b234a] mb-2">Important Notice</h4>
                  <p className="text-gray-700">
                    Refund eligibility is subject to thorough investigation of your case. Please ensure you provide all necessary details when submitting your refund request. Multiple demo classes or completed services may not be eligible for refunds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;