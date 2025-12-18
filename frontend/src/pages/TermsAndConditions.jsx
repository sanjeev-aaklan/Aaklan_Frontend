import React, { useState } from 'react';
import { FaExclamationTriangle, FaShieldAlt, FaUserLock, FaGavel, FaFileContract } from 'react-icons/fa';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'use-of-content', title: 'Use of Content' },
    { id: 'acceptable-use', title: 'Acceptable Use' },
    { id: 'indemnity', title: 'Indemnity' },
    { id: 'liability', title: 'Liability' },
    { id: 'disclaimer', title: 'Disclaimer' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0b234a] to-[#1a3a6e] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <FaFileContract className="text-2xl text-orange-500" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our website and services
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
                  <FaGavel className="text-[#E22213]" />
                  Quick Navigation
                </h3>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                          activeSection === section.id
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'text-gray-700 hover:bg-orange-50 hover:text-[#0b234a]'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Important Notice */}
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <FaExclamationTriangle className="text-orange-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0b234a] mb-2">Important Notice</h4>
                  <p className="text-sm text-gray-700">
                    By using our website, you agree to be bound by these terms and conditions.
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
                    <FaShieldAlt className="text-orange-500 text-lg" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0b234a]">
                    {sections.find(s => s.id === activeSection)?.title}
                  </h2>
                </div>
                <p className="text-gray-600">Last updated: December 2024</p>
              </div>

              <div className="p-6 md:p-8">
                {/* Introduction Section */}
                {activeSection === 'introduction' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        The terms <strong>"We" / "Us" / "Our"/”Company”</strong> individually and collectively refer to <span className="text-[#E22213] font-semibold">Aaklan</span> and the terms <strong>"Visitor” ”User”</strong> refer to the users.
                      </p>
                      
                      <div className="bg-blue-50 border-l-4 border-[#0b234a] p-4 my-6 rounded-r-lg">
                        <p className="text-gray-700">
                          This page states the Terms and Conditions under which you (Visitor) may visit this website ("Aaklan.com"). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site.
                        </p>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        The business, any of its business divisions and / or its subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment companies (in India or abroad) reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this Website.
                      </p>
                    </div>
                  </div>
                )}

                {/* Use of Content Section */}
                {activeSection === 'use-of-content' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <FaUserLock className="text-orange-500 text-xl mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under licence, by the business and / or its associate entities who feature on this Website.
                        </p>
                      </div>

                      <p className="text-gray-700 leading-relaxed mt-6">
                        The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited. You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organisation's or entity's written permission.
                      </p>
                    </div>
                  </div>
                )}

                {/* Acceptable Use Section */}
                {activeSection === 'acceptable-use' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4 flex items-center gap-2">
                        <FaShieldAlt className="text-[#E22213]" />
                        (A) Security Rules
                      </h3>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <p className="text-gray-700 mb-4">
                          Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation:
                        </p>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#E22213] font-bold">1.</span>
                            <span>Accessing data not intended for such user or logging into a server or account which the user is not authorised to access</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E22213] font-bold">2.</span>
                            <span>Attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E22213] font-bold">3.</span>
                            <span>Attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or "Trojan horse" to the Website, overloading, "flooding", "mail bombing" or "crashing"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E22213] font-bold">4.</span>
                            <span>Sending unsolicited electronic mail, including promotions and/or advertising of products or services. Violations of system or network security may result in civil or criminal liability.</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-gray-700 mt-4">
                        The business and / or its associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4">(B) General Rules</h3>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <p className="text-gray-700">
                          Visitors may not use the Web Site in order to transmit, distribute, store or destroy material:
                        </p>
                        <ul className="space-y-2 mt-3 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#E22213] font-bold">(a)</span>
                            <span>that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E22213] font-bold">(b)</span>
                            <span>in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E22213] font-bold">(c)</span>
                            <span>that is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Indemnity Section */}
                {activeSection === 'indemnity' && (
                  <div className="space-y-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4">User Indemnification Agreement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The User unilaterally agree to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of aaklan.com or their breach of the terms.
                      </p>
                    </div>
                  </div>
                )}

                {/* Liability Section */}
                {activeSection === 'liability' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                        <p className="text-gray-700">
                          User agrees that neither Company nor its group companies, directors, officers or employee shall be liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, resulting from the use or/and the inability to use the service or/and for cost of procurement of substitute goods or/and services or resulting from any goods or/and data or/and information or/and services purchased or/and obtained or/and messages received or/and transactions entered into through or/and from the service or/and resulting from unauthorized access to or/and alteration of user's transmissions or/and data or/and arising from any other matter relating to the service, including but not limited to, damages for loss of profits or/and use or/and data or other intangible, even if Company has been advised of the possibility of such damages.
                        </p>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        User further agrees that Company shall not be liable for any damages arising from interruption, suspension or termination of service, including but not limited to direct or/and indirect or/and incidental or/and special consequential or/and exemplary damages, whether such interruption or/and suspension or/and termination was justified or not, negligent or intentional, inadvertent or advertent.
                      </p>

                      <p className="text-gray-700 leading-relaxed">
                        User agrees that Company shall not be responsible or liable to user, or anyone, for the statements or conduct of any third party of the service. In sum, in no event shall Company's total liability to the User for all damages or/and losses or/and causes of action exceed the amount paid by the User to Company, if any, that is related to the cause of action.
                      </p>
                    </div>
                  </div>
                )}

                {/* Disclaimer Section */}
                {activeSection === 'disclaimer' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4">Disclaimer of Consequential Damages</h3>
                      <p className="text-gray-700 leading-relaxed">
                        In no event shall Company or any parties, organizations or entities associated with the corporate brand name us or otherwise, mentioned at this Website be liable for any damages whatsoever (including, without limitations, incidental and consequential damages, lost profits, or damage to computer hardware or loss of data information or business interruption) resulting from the use or inability to use the Website and the Website material, whether based on warranty, contract, tort, or any other legal theory, and whether or not, such organization or entities were advised of the possibility of such damages.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Acceptance Banner */}
            <div className="mt-8 bg-gradient-to-r from-[#0b234a] to-[#1a3a6e] text-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Acceptance of Terms</h3>
                  <p className="text-blue-100">
                    By continuing to use our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
                  I Understand
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;