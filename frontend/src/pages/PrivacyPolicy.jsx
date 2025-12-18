import React, { useState } from 'react';
import { FaShieldAlt, FaUserLock, FaCookie, FaLink, FaShareAlt, FaLock, FaEnvelope, FaUserCheck } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FaShieldAlt },
    { id: 'user-information', title: 'User Information', icon: FaUserCheck },
    { id: 'cookies', title: 'Cookies', icon: FaCookie },
    { id: 'links', title: 'External Links', icon: FaLink },
    { id: 'sharing', title: 'Information Sharing', icon: FaShareAlt },
    { id: 'security', title: 'Information Security', icon: FaLock },
    { id: 'grievance', title: 'Grievance Redressal', icon: FaEnvelope }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0b234a] to-[#1a3a6e] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <FaShieldAlt className="text-2xl text-orange-500" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy and data security are our top priorities
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
                  <FaUserLock className="text-[#E22213]" />
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

            {/* Data Protection Notice */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <FaLock className="text-[#0b234a] text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0b234a] mb-2">Your Data is Protected</h4>
                  <p className="text-sm text-gray-700">
                    We follow industry best practices to secure your personal information.
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
                      <p className="text-gray-700 leading-relaxed">
                        The terms <strong>"We" / "Us" / "Our"/”Company”</strong> individually and collectively refer to <span className="text-[#E22213] font-semibold">Aaklan</span> and the terms <strong>"You" /"Your" / "Yourself"</strong> refer to the users.
                      </p>
                      
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r-lg">
                        <p className="text-gray-700">
                          This Privacy Policy is an electronic record in the form of an electronic contract formed under the information Technology Act, 2000 and the rules made thereunder and the amended provisions pertaining to electronic documents / records in various statutes as amended by the information Technology Act, 2000. This Privacy Policy does not require any physical, electronic or digital signature.
                        </p>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        This Privacy Policy is a legally binding document between you and Aaklan (both terms defined below). The terms of this Privacy Policy will be effective upon your acceptance of the same (directly or indirectly in electronic form, by clicking on the I accept tab or by use of the website or by other means) and will govern the relationship between you and Aaklan for your use of the website <strong>"Aaklan.com"</strong> (defined below).
                      </p>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                        <h4 className="font-bold text-[#0b234a] mb-2">Legal Compliance</h4>
                        <p className="text-gray-700 text-sm">
                          This document is published and shall be construed in accordance with the provisions of the Information Technology (reasonable security practices and procedures and sensitive personal data of information) rules, 2011 under Information Technology Act, 2000; that require publishing of the Privacy Policy for collection, use, storage and transfer of sensitive personal data or information.
                        </p>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
                        <h4 className="font-bold text-[#0b234a] mb-2">Important Notice</h4>
                        <p className="text-gray-700">
                          Please read this Privacy Policy carefully by using the Website, you indicate that you understand, agree and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use this Website.
                        </p>
                        <p className="text-gray-700 mt-3">
                          By providing us your Information or by making use of the facilities provided by the Website, You hereby consent to the collection, storage, processing and transfer of any or all of Your Personal Information and Non-Personal Information by us as specified under this Privacy Policy. You further agree that such collection, use, storage and transfer of Your Information shall not cause any loss or wrongful gain to you or any other person.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* User Information Section */}
                {activeSection === 'user-information' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4">Information We Collect</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        To avail certain services on our Websites, users are required to provide certain information for the registration process namely:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-[#0b234a] mb-2">Personal Information</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Your name</li>
                            <li>• Email address</li>
                            <li>• Sex & Age</li>
                            <li>• PIN code</li>
                            <li>• Payment details</li>
                          </ul>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                          <h4 className="font-semibold text-[#0b234a] mb-2">Sensitive Information</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Medical records and history</li>
                            <li>• Sexual orientation</li>
                            <li>• Biometric information</li>
                            <li>• Password</li>
                            <li>• Occupation & Interests</li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        The Information as supplied by the users enables us to improve our sites and provide you the most user-friendly experience.
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r-lg">
                        <p className="text-gray-700">
                          All required information is service dependent and we may use the above said user information to, maintain, protect, and improve its services (including advertising services) and for developing new services.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-[#0b234a] mb-2">Public Domain Exception</h4>
                        <p className="text-gray-700 text-sm">
                          Such information will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005 or any other law for the time being in force.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cookies Section */}
                {activeSection === 'cookies' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4">How We Use Cookies</h3>
                      
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                        <p className="text-gray-700">
                          To improve the responsiveness of the sites for our users, we may use "cookies", or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user's individual interests using the Identified Computer.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-[#0b234a] mb-3">Cookie Limitations</h4>
                          <ul className="text-gray-700 space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E22213] font-bold">•</span>
                              <span>Unless you voluntarily identify yourself, we cannot know who you are</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E22213] font-bold">•</span>
                              <span>Cookies can only contain information you supply</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E22213] font-bold">•</span>
                              <span>Cookies cannot read data off your hard drive</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0b234a] mb-3">Server Information</h4>
                          <ul className="text-gray-700 space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E22213] font-bold">•</span>
                              <span>We collect limited connection information including IP address</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E22213] font-bold">•</span>
                              <span>IP address does not personally identify you</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E22213] font-bold">•</span>
                              <span>Used to tailor content and measure traffic</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                        <h4 className="font-semibold text-[#0b234a] mb-2">Third-Party Cookies</h4>
                        <p className="text-gray-700 text-sm">
                          Our advertisers may also assign their own cookies to your browser (if you click on their ads), a process that we do not control.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* External Links Section */}
                {activeSection === 'links' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4">External Website Links</h3>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                        <p className="text-gray-700">
                          Our policy discloses the privacy practices for our own web site only. Our site provides links to other websites also that are beyond our control. We shall in no way be responsible in way for your use of such sites.
                        </p>
                      </div>

                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                        <h4 className="font-semibold text-[#0b234a] mb-2">Important Notice</h4>
                        <p className="text-gray-700 text-sm">
                          When you click on external links from our website, you are subject to the privacy policies and terms of those external websites. We recommend reviewing their privacy policies before providing any personal information.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Information Sharing Section */}
                {activeSection === 'sharing' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4">When We Share Your Information</h3>
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                        <p className="text-gray-700">
                          We shares the sensitive personal information to any third party without obtaining the prior consent of the user in the following limited circumstances:
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="border-l-4 border-[#0b234a] pl-4 py-2">
                          <h4 className="font-semibold text-[#0b234a] mb-2">(a) Legal Requirements</h4>
                          <p className="text-gray-700 text-sm">
                            When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; for complying with the applicable laws and regulations.
                          </p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4 py-2">
                          <h4 className="font-semibold text-[#0b234a] mb-2">(b) Internal Processing</h4>
                          <p className="text-gray-700 text-sm">
                            We propose to share such information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. We also ensure that these recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Information Security Section */}
                {activeSection === 'security' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4">Our Security Measures</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-[#0b234a] mb-3">Security Protocols</h4>
                          <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• Internal data collection reviews</li>
                            <li>• Appropriate encryption methods</li>
                            <li>• Physical security measures</li>
                            <li>• Controlled database access</li>
                            <li>• Firewall protection</li>
                            <li>• Password-protected servers</li>
                          </ul>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                          <h4 className="font-semibold text-[#0b234a] mb-3">Storage & Access</h4>
                          <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• Secure database storage</li>
                            <li>• Limited server access</li>
                            <li>• Regular security audits</li>
                            <li>• Data encryption at rest</li>
                            <li>• Secure transmission protocols</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-[#0b234a] mb-2">Security Disclaimer</h4>
                        <p className="text-gray-700 text-sm">
                          However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. And, of course, any information you include in a posting to the discussion areas is available to anyone with Internet access.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-[#0b234a] mb-2">Policy Updates</h4>
                        <p className="text-gray-700 text-sm">
                          However the internet is an ever evolving medium. We may change our Privacy Policy from time to time to incorporate necessary future changes. Of course, our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Grievance Redressal Section */}
                {activeSection === 'grievance' && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-[#0b234a] mb-4">Grievance Redressal Mechanism</h3>
                      
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                        <p className="text-gray-700">
                          Any complaints, abuse or concerns with regards to content and or comment or breach of these terms shall be immediately informed to us as mentioned below via in writing or through email signed with the electronic signature.
                        </p>
                      </div>

                      <div className="bg-[#0b234a] text-white rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <FaEnvelope className="text-orange-500 text-2xl mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-xl font-bold mb-2">Contact for Grievances</h4>
                            <p className="text-blue-100 mb-4">
                              For any privacy-related concerns or complaints, please contact our Grievance Officer:
                            </p>
                            <div className="bg-white/10 p-4 rounded-lg">
                              <p className="font-semibold text-orange-300">Email: complaints@aaklan.com</p>
                              <p className="text-blue-100 text-sm mt-2">
                                Please include "Privacy Policy Grievance" in the subject line and provide detailed information about your concern.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Consent Banner */}
            <div className="mt-8 bg-gradient-to-r from-[#0b234a] to-[#1a3a6e] text-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Privacy Matters</h3>
                  <p className="text-blue-100">
                    By continuing to use our services, you acknowledge that you have read and understood our Privacy Policy.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    I Accept
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;