// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import StatusCount from "./StatusCount";

// const Dashboard = () => {
//   const [applicants, setApplicants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [showResume, setShowResume] = useState(false);
//   const [currentResume, setCurrentResume] = useState("");

//   const [showVideo, setShowVideo] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState({});

//   const [interviewDetails, setInterviewDetails] = useState({
//     interviewDate: "",
//     interviewTime: "",
//     zoomLink: "",
//   });

//   // Modal for scheduling next stage interviews
//   const [showStageModal, setShowStageModal] = useState(false);
//   const [currentStageApplicant, setCurrentStageApplicant] = useState(null);
//   const [currentStage, setCurrentStage] = useState("");
//   const [stageInterviewDetails, setStageInterviewDetails] = useState({
//     interviewDate: "",
//     interviewTime: "",
//     zoomLink: "",
//   });

//   // Fetch all applicants
//   const fetchApplicants = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(
//         `${import.meta.env.VITE_BACKEND_URL}/api/career/applicants`
//       );
//       if (res.data.success) {
//         setApplicants(res.data.message);
//       }
//     } catch (error) {
//       toast.error("Failed to load applicants");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApplicants();
//   }, []);

//   // // Status badges with colors
//   const getStatusBadge = (status) => {
//     const statusConfig = {
//       applied: "bg-blue-100 text-blue-800",
//       resume_shortlisted: "bg-amber-100 text-amber-800",
//       topic_sent: "bg-purple-100 text-purple-800",
//       video_submitted: "bg-indigo-100 text-indigo-800",
//       video_shortlisted: "bg-green-100 text-green-800",
//       video_rejected: "bg-red-100 text-red-800",
//       technicalInterview: "bg-orange-100 text-orange-800",
//       technicalInterview_cleared: "bg-emerald-100 text-emerald-800",
//       hrInterview: "bg-cyan-100 text-cyan-800",
//       hrInterview_cleared: "bg-teal-100 text-teal-800",
//       offered: "bg-green-100 text-green-800",
//       rejected: "bg-red-100 text-red-800",
//     };

//     return (
//       <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[status] || "bg-gray-100 text-gray-800"}`}>
//         {status.replace(/_/g, ' ')}
//       </span>
//     );
//   };

//   // Resume decisions
//   const handleDecision = async (id, decision) => {
//     try {
//       const res = await axios.put(
//         `${import.meta.env.VITE_BACKEND_URL}/api/career/shortlist/${id}`,
//         { decision }
//       );
//       toast.success(res.data.message);
//       fetchApplicants();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Server error");
//     }
//   };

//   const handleSendTopic = async (id) => {
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/api/career/send-topic/${id}`
//       );
//       toast.success(res.data.message);
//       fetchApplicants();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Server error");
//     }
//   };

//   const handleViewResume = (resumeLink) => {
//     setCurrentResume(resumeLink);
//     setShowResume(true);
//   };

//   const handleViewVideo = (applicant) => {
//     setCurrentVideo({
//       url: applicant.videoUrl,
//       applicantId: applicant._id,
//       status: applicant.status,
//       name: applicant.name,
//       email: applicant.email
//     });
//     setShowVideo(true);
//     // Reset interview details when opening video modal
//     setInterviewDetails({ interviewDate: "", interviewTime: "", zoomLink: "" });
//   };

//   const handleVideoDecision = async (id, decision) => {
//     try {
//       const payload =
//         decision === "shortlist"
//           ? {
//             decision,
//             interviewDate: interviewDetails.interviewDate,
//             interviewTime: interviewDetails.interviewTime,
//             zoomLink: interviewDetails.zoomLink,
//           }
//           : { decision };

//       const res = await axios.put(
//         `${import.meta.env.VITE_BACKEND_URL}/api/career/video-screening/${id}`,
//         payload
//       );

//       toast.success(res.data.message);
//       setShowVideo(false);
//       setInterviewDetails({ interviewDate: "", interviewTime: "", zoomLink: "" });
//       fetchApplicants();
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Server error");
//     }
//   };

//   const handleNextStageClick = (applicant, stage) => {
//     setCurrentStageApplicant(applicant);
//     setCurrentStage(stage);
//     if (stage === "technicalInterview" && applicant.technicalInterview) {
//       setStageInterviewDetails({ ...applicant.technicalInterview });
//     } else if (stage === "hrInterview" && applicant.hrInterview) {
//       setStageInterviewDetails({ ...applicant.hrInterview });
//     } else {
//       setStageInterviewDetails({ interviewDate: "", interviewTime: "", zoomLink: "" });
//     }
//     setShowStageModal(true);
//   };

//   const handleNextStageSubmit = async () => {
//     try {
//       const payload =
//         currentStage === "technicalInterview"
//           ? {
//             technicalInterview: {
//               interviewDate: stageInterviewDetails.interviewDate,
//               interviewTime: stageInterviewDetails.interviewTime,
//               zoomLink: stageInterviewDetails.zoomLink
//             },
//             status: currentStage
//           }
//           : {
//             hrInterview: {
//               interviewDate: stageInterviewDetails.interviewDate,
//               interviewTime: stageInterviewDetails.interviewTime,
//               zoomLink: stageInterviewDetails.zoomLink
//             },
//             status: currentStage
//           };

//       const res = await axios.put(
//         `${import.meta.env.VITE_BACKEND_URL}/api/career/next-stage/${currentStageApplicant._id}`,
//         payload
//       );

//       toast.success(res.data.message);
//       setShowStageModal(false);
//       setStageInterviewDetails({ interviewDate: "", interviewTime: "", zoomLink: "" });
//       fetchApplicants();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Server error");
//     }
//   };

//   const handleMarkInterviewClear = async () => {
//     try {
//       const payload = { status: currentStage + "_cleared" };
//       const res = await axios.put(
//         `${import.meta.env.VITE_BACKEND_URL}/api/career/next-stage/${currentStageApplicant._id}`,
//         payload
//       );
//       toast.success(res.data.message);
//       setShowStageModal(false);
//       fetchApplicants();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Server error");
//     }
//   };

//   // Fixed handleNextStage function
//   const handleNextStage = async (id, stage) => {
//     if (stage === "technicalInterview" || stage === "hrInterview") {
//       const applicant = applicants.find((a) => a._id === id);
//       handleNextStageClick(applicant, stage);
//       return; // Return here to prevent the API call below
//     }

//     try {
//       const payload = { status: stage };
//       const res = await axios.put(
//         `${import.meta.env.VITE_BACKEND_URL}/api/career/next-stage/${id}`,
//         payload
//       );
//       toast.success(res.data.message);
//       fetchApplicants();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Server error");
//     }
//   };

//   // Check if interview scheduling form should be shown
//   const shouldShowSchedulingForm = () => {
//     return currentVideo.status === "video_submitted";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Applicants Dashboard</h1>
//           <p className="text-gray-600">Manage and review all job applications in one place</p>
//         </div>

//         {/* Stats Summary */}
//         <StatusCount applicants={applicants}/>

//         {/* Applicants Table */}
//         {loading ? (
//           <div className="bg-white rounded-xl shadow-sm p-8 text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//             <p className="mt-4 text-gray-600">Loading applicants...</p>
//           </div>
//         ) : applicants.length === 0 ? (
//           <div className="bg-white rounded-xl shadow-sm p-8 text-center">
//             <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No applicants found</h3>
//             <p className="text-gray-600">When applicants apply, they'll appear here.</p>
//           </div>
//         ) : (
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documents</th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {applicants.map((app) => (
//                     <tr key={app._id} className="hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div>
//                           <div className="text-sm font-medium text-gray-900">{app.name}</div>
//                           <div className="text-sm text-gray-500">{app.email}</div>
//                           <div className="text-sm text-gray-500">{app.phone}</div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="text-sm text-gray-900 font-medium">{app.appliedPosition}</span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex space-x-3">
//                           {app.resumeLink && (
//                             <button
//                               onClick={() => handleViewResume(app.resumeLink)}
//                               className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                             >
//                               <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                               </svg>
//                               Resume
//                             </button>
//                           )}
//                           {app.videoUrl ? (
//                             <button
//                               onClick={() => handleViewVideo(app)}
//                               className="inline-flex items-center px-3 py-1.5 border border-purple-200 shadow-sm text-xs font-medium rounded-lg text-purple-700 bg-purple-50 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                             >
//                               <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                               </svg>
//                               Video
//                             </button>
//                           ) : app.status === "topic_sent" ? (
//                             <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 text-xs font-medium rounded-lg text-gray-500 bg-gray-50">
//                               Video Pending
//                             </span>
//                           ) : (
//                             <span className="text-gray-400">-</span>
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {getStatusBadge(app.status)}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <div className="flex flex-wrap gap-2">
//                           {app.status === "applied" && (
//                             <>
//                               <button
//                                 className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                                 onClick={() => handleDecision(app._id, "shortlist")}
//                               >
//                                 Shortlist
//                               </button>
//                               <button
//                                 className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                 onClick={() => handleDecision(app._id, "reject")}
//                               >
//                                 Reject
//                               </button>
//                             </>
//                           )}

//                           {app.status === "resume_shortlisted" && (
//                             <button
//                               className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                               onClick={() => handleSendTopic(app._id)}
//                             >
//                               Send Topic
//                             </button>
//                           )}

//                           {app.status === "topic_sent" && (
//                             <span className="text-gray-500 text-sm">Awaiting Video Submission</span>
//                           )}

//                           {app.status === "video_submitted" && (
//                             <button
//                               className="inline-flex items-center px-3 py-1.5 border border-purple-200 shadow-sm text-xs font-medium rounded-lg text-purple-700 bg-purple-50 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                               onClick={() => handleViewVideo(app)}
//                             >
//                               Review Video
//                             </button>
//                           )}

//                           {app.status === "video_shortlisted" && (
//                             <div className="flex flex-col space-y-2">
//                               <div className="flex flex-wrap gap-2">
//                                 <button
//                                   className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//                                   onClick={() => handleNextStage(app._id, "technicalInterview")}
//                                 >
//                                   Technical Interview
//                                 </button>
//                                 <button
//                                   className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//                                   onClick={() => handleNextStage(app._id, "hrInterview")}
//                                 >
//                                   HR Interview
//                                 </button>
//                               </div>
//                               <div className="flex flex-wrap gap-2">
//                                 <button
//                                   className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//                                   onClick={() => handleNextStage(app._id, "offered")}
//                                 >
//                                   Offer
//                                 </button>

//                                 <button
//                                   className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                   onClick={() => handleNextStage(app._id, "rejected")}
//                                 >
//                                   Reject
//                                 </button>
//                               </div>
//                             </div>
//                           )}

//                           {(app.status === "technicalInterview" || app.status === "hrInterview") && (
//                             <div className="flex flex-wrap gap-2">
//                               <button
//                                 className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                                 onClick={() => handleNextStageClick(app, app.status)}
//                               >
//                                 Reschedule Interview
//                               </button>
//                               <button
//                                 className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//                                 onClick={() => handleNextStage(app._id, app.status + "_cleared")}
//                               >
//                                 Mark as Cleared
//                               </button>
//                             </div>
//                           )}

//                           {/* Technical Interview Completed - Show HR Interview Option */}
//                           {app.status === "technicalInterview_cleared" && (
//                             <div className="flex flex-col space-y-2">
//                               <div className="flex flex-wrap gap-2">
//                                 <button
//                                   className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//                                   onClick={() => handleNextStage(app._id, "hrInterview")}
//                                 >
//                                   Schedule HR Interview
//                                 </button>
//                               </div>
//                               <div className="flex flex-wrap gap-2">
//                                 <button
//                                   className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//                                   onClick={() => handleNextStage(app._id, "offered")}
//                                 >
//                                   Direct Offer
//                                 </button>
//                                 <button
//                                   className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                   onClick={() => handleNextStage(app._id, "rejected")}
//                                 >
//                                   Reject
//                                 </button>
//                               </div>
//                             </div>
//                           )}

//                           {/* HR Interview Completed */}
//                           {app.status === "hrInterview_cleared" && (
//                             <div className="flex flex-wrap gap-2">
//                               <button
//                                 className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//                                 onClick={() => handleNextStage(app._id, "offered")}
//                               >
//                                 Offer Position
//                               </button>
//                               <button
//                                 className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                 onClick={() => handleNextStage(app._id, "rejected")}
//                               >
//                                 Reject
//                               </button>
//                             </div>
//                           )}

//                           {app.status === "video_rejected" && (
//                             <span className="text-red-700 font-medium">Rejected</span>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Resume Modal */}
//         {showResume && (
//           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
//             <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl p-6 relative">
//               <button
//                 onClick={() => setShowResume(false)}
//                 className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-all"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//               <h2 className="text-xl font-semibold mb-4 text-gray-900">Resume Preview</h2>
//               <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
//                 <iframe
//                   src={currentResume}
//                   className="w-full h-[70vh] rounded-lg"
//                   title="Resume Preview"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Video Modal */}
//         {showVideo && (
//           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
//             <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
//               <button
//                 onClick={() => setShowVideo(false)}
//                 className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-all"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>

//               <h2 className="text-xl font-semibold mb-4 text-gray-900">Video Interview Review</h2>

//               {/* Candidate Info */}
//               <div className="bg-gray-50 rounded-lg p-4 mb-4">
//                 <h3 className="font-semibold text-gray-900">{currentVideo.name}</h3>
//                 <p className="text-sm text-gray-600">{currentVideo.email}</p>
//               </div>

//               <div className="bg-gray-900 rounded-xl overflow-hidden mb-4">
//                 <video
//                   src={currentVideo.url}
//                   controls
//                   className="w-full h-auto max-h-[40vh]"
//                   controlsList="nodownload"
//                 />
//               </div>

//               {shouldShowSchedulingForm() && (
//                 <>
//                   <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
//                     <h3 className="font-semibold text-blue-900 mb-3 text-lg">Schedule Next Interview</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
//                       <div>
//                         <label className="block text-sm font-medium text-blue-700 mb-1">Interview Date</label>
//                         <input
//                           type="date"
//                           className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
//                           value={interviewDetails.interviewDate}
//                           onChange={(e) =>
//                             setInterviewDetails({ ...interviewDetails, interviewDate: e.target.value })
//                           }
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-blue-700 mb-1">Interview Time</label>
//                         <input
//                           type="time"
//                           className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
//                           value={interviewDetails.interviewTime}
//                           onChange={(e) =>
//                             setInterviewDetails({ ...interviewDetails, interviewTime: e.target.value })
//                           }
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-blue-700 mb-1">Meeting Link</label>
//                       <input
//                         type="text"
//                         placeholder="https://zoom.us/j/..."
//                         className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
//                         value={interviewDetails.zoomLink}
//                         onChange={(e) =>
//                           setInterviewDetails({ ...interviewDetails, zoomLink: e.target.value })
//                         }
//                       />
//                     </div>
//                   </div>
//                   <div className="flex justify-end space-x-3">
//                     <button
//                       className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors font-medium text-sm"
//                       onClick={() => handleVideoDecision(currentVideo.applicantId, "reject")}
//                     >
//                       Reject Candidate
//                     </button>
//                     <button
//                       className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium text-sm"
//                       onClick={() => handleVideoDecision(currentVideo.applicantId, "shortlist")}
//                     >
//                       Shortlist & Schedule
//                     </button>
//                   </div>
//                 </>
//               )}

//               {currentVideo.status === "video_rejected" && (
//                 <div className="text-center py-6">
//                   <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                     <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </div>
//                   <p className="text-red-700 font-semibold">This candidate has been rejected</p>
//                 </div>
//               )}

//               {currentVideo.status === 'video_shortlisted' && (
//                 <div className="text-center py-6">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                     <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <p className="text-green-700 font-semibold mb-2">This candidate has been shortlisted for the next round</p>
//                   <p className="text-gray-600 text-sm">You can schedule their interview using the options in the table.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}


//         {/* Technical/HR Modal */}
//         {showStageModal && (
//           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
//             <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative">
//               <button
//                 onClick={() => setShowStageModal(false)}
//                 className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>

//               <div className="text-center mb-2">
//                 <div className={`w-12 h-12 rounded-full ${currentStage === "technicalInterview" ? 'bg-orange-100' : 'bg-cyan-100'} flex items-center justify-center mx-auto mb-3`}>
//                   <svg className={`w-6 h-6 ${currentStage === "technicalInterview" ? 'text-orange-600' : 'text-cyan-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   {currentStage === "technicalInterview" ? "Technical Interview" : "HR Interview"}
//                 </h2>
//                 <p className="text-gray-600 mt-1">
//                   {currentStageApplicant?.technicalInterview?.interviewDate || currentStageApplicant?.hrInterview?.interviewDate
//                     ? "Reschedule interview details"
//                     : "Schedule interview details"}
//                 </p>
//               </div>

//               <div className="space-y-4 mb-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Interview Date</label>
//                   <input
//                     type="date"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     value={stageInterviewDetails.interviewDate}
//                     onChange={(e) =>
//                       setStageInterviewDetails({ ...stageInterviewDetails, interviewDate: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Interview Time</label>
//                   <input
//                     type="time"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     value={stageInterviewDetails.interviewTime}
//                     onChange={(e) =>
//                       setStageInterviewDetails({ ...stageInterviewDetails, interviewTime: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Link</label>
//                   <input
//                     type="text"
//                     placeholder="https://zoom.us/j/..."
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     value={stageInterviewDetails.zoomLink}
//                     onChange={(e) =>
//                       setStageInterviewDetails({ ...stageInterviewDetails, zoomLink: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col space-y-3">
//                 <button
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
//                   onClick={handleNextStageSubmit}
//                 >
//                   {currentStageApplicant?.technicalInterview?.interviewDate || currentStageApplicant?.hrInterview?.interviewDate
//                     ? "Reschedule Interview"
//                     : "Save & Schedule Interview"}
//                 </button>
//                 <button
//                   className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors font-medium"
//                   onClick={handleMarkInterviewClear}
//                 >
//                   Mark Interview as Cleared
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard


import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import StatusCount from "./StatusCount";

const Dashboard = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showResume, setShowResume] = useState(false);
  const [currentResume, setCurrentResume] = useState("");

  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});

  const [interviewDetails, setInterviewDetails] = useState({
    interviewDate: "",
    interviewTime: "",
    zoomLink: "",
  });

  // Modal for scheduling next stage interviews
  const [showStageModal, setShowStageModal] = useState(false);
  const [currentStageApplicant, setCurrentStageApplicant] = useState(null);
  const [currentStage, setCurrentStage] = useState("");
  const [stageInterviewDetails, setStageInterviewDetails] = useState({
    interviewDate: "",
    interviewTime: "",
    zoomLink: "",
  });

  // Offer Modal State
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

  console.log(offerFormData);
  

  // Fetch all applicants
  const fetchApplicants = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/career/applicants`
      );
      if (res.data.success) {
        setApplicants(res.data.message);
      }
    } catch (error) {
      toast.error("Failed to load applicants");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  // Status badges with colors
  const getStatusBadge = (status) => {
    const statusConfig = {
      applied: "bg-blue-100 text-blue-800",
      resume_shortlisted: "bg-amber-100 text-amber-800",
      topic_sent: "bg-purple-100 text-purple-800",
      video_submitted: "bg-indigo-100 text-indigo-800",
      video_shortlisted: "bg-green-100 text-green-800",
      video_rejected: "bg-red-100 text-red-800",
      technicalInterview: "bg-orange-100 text-orange-800",
      technicalInterview_cleared: "bg-emerald-100 text-emerald-800",
      hrInterview: "bg-cyan-100 text-cyan-800",
      hrInterview_cleared: "bg-teal-100 text-teal-800",
      offered: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[status] || "bg-gray-100 text-gray-800"}`}>
        {status.replace(/_/g, ' ')}
      </span>
    );
  };

  // Resume decisions
  const handleDecision = async (id, decision) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/career/shortlist/${id}`,
        { decision }
      );
      toast.success(res.data.message);
      fetchApplicants();
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  const handleSendTopic = async (id) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/career/send-topic/${id}`
      );
      toast.success(res.data.message);
      fetchApplicants();
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  const handleViewResume = (resumeLink) => {
    setCurrentResume(resumeLink);
    setShowResume(true);
  };

  const handleViewVideo = (applicant) => {
    setCurrentVideo({
      url: applicant.videoUrl,
      applicantId: applicant._id,
      status: applicant.status,
      name: applicant.name,
      email: applicant.email
    });
    setShowVideo(true);
    // Reset interview details when opening video modal
    setInterviewDetails({ interviewDate: "", interviewTime: "", zoomLink: "" });
  };

  const handleVideoDecision = async (id, decision) => {
    try {
      const payload =
        decision === "shortlist"
          ? {
            decision,
            interviewDate: interviewDetails.interviewDate,
            interviewTime: interviewDetails.interviewTime,
            zoomLink: interviewDetails.zoomLink,
          }
          : { decision };

      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/career/video-screening/${id}`,
        payload
      );

      toast.success(res.data.message);
      setShowVideo(false);
      setInterviewDetails({ interviewDate: "", interviewTime: "", zoomLink: "" });
      fetchApplicants();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  const handleNextStageClick = (applicant, stage) => {
    setCurrentStageApplicant(applicant);
    setCurrentStage(stage);
    if (stage === "technicalInterview" && applicant.technicalInterview) {
      setStageInterviewDetails({ ...applicant.technicalInterview });
    } else if (stage === "hrInterview" && applicant.hrInterview) {
      setStageInterviewDetails({ ...applicant.hrInterview });
    } else {
      setStageInterviewDetails({ interviewDate: "", interviewTime: "", zoomLink: "" });
    }
    setShowStageModal(true);
  };

  const handleNextStageSubmit = async () => {
    try {
      const payload =
        currentStage === "technicalInterview"
          ? {
            technicalInterview: {
              interviewDate: stageInterviewDetails.interviewDate,
              interviewTime: stageInterviewDetails.interviewTime,
              zoomLink: stageInterviewDetails.zoomLink
            },
            status: currentStage
          }
          : {
            hrInterview: {
              interviewDate: stageInterviewDetails.interviewDate,
              interviewTime: stageInterviewDetails.interviewTime,
              zoomLink: stageInterviewDetails.zoomLink
            },
            status: currentStage
          };

      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/career/next-stage/${currentStageApplicant._id}`,
        payload
      );

      toast.success(res.data.message);
      setShowStageModal(false);
      setStageInterviewDetails({ interviewDate: "", interviewTime: "", zoomLink: "" });
      fetchApplicants();
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  const handleMarkInterviewClear = async () => {
    try {
      const payload = { status: currentStage + "_cleared" };
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/career/next-stage/${currentStageApplicant._id}`,
        payload
      );
      toast.success(res.data.message);
      setShowStageModal(false);
      fetchApplicants();
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  // Offer Modal Functions
  const openOfferModal = (applicant) => {
    setSelectedApplicant(applicant);
    // Pre-fill form with applicant data
    const joiningDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const formattedDate = joiningDate.toISOString().split('T')[0];

    setOfferFormData({
      name: applicant.name,
      role: applicant.appliedPosition,
      dateOfJoining: formattedDate,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOfferFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOfferSubmit = async () => {
    // Basic validation
    if (!offerFormData.name || !offerFormData.role || !offerFormData.netSalary) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (selectedApplicant) {
      try {
        const payload = {
          status: "offered",
          ...offerFormData
        };

        const res = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/career/next-stage/${selectedApplicant._id}`,
          payload
        );

        toast.success(res.data.message);
        closeOfferModal();
        fetchApplicants();
      } catch (error) {
        toast.error(error.response?.data?.message || "Server error");
      }
    }
  };

  // Fixed handleNextStage function
  const handleNextStage = async (id, stage) => {
    if (stage === "technicalInterview" || stage === "hrInterview") {
      const applicant = applicants.find((a) => a._id === id);
      handleNextStageClick(applicant, stage);
      return; // Return here to prevent the API call below
    }

    // For "offered" stage, we now use the modal, so this should not be called directly
    if (stage === "offered") {
      const applicant = applicants.find((a) => a._id === id);
      openOfferModal(applicant);
      return;
    }

    try {
      const payload = { status: stage };
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/career/next-stage/${id}`,
        payload
      );
      toast.success(res.data.message);
      fetchApplicants();
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  // Check if interview scheduling form should be shown
  const shouldShowSchedulingForm = () => {
    return currentVideo.status === "video_submitted";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Applicants Dashboard</h1>
          <p className="text-gray-600">Manage and review all job applications in one place</p>
        </div>

        {/* Stats Summary */}
        <StatusCount applicants={applicants} />

        {/* Applicants Table */}
        {loading ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading applicants...</p>
          </div>
        ) : applicants.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No applicants found</h3>
            <p className="text-gray-600">When applicants apply, they'll appear here.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documents</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applicants.map((app) => (
                    <tr key={app._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{app.name}</div>
                          <div className="text-sm text-gray-500">{app.email}</div>
                          <div className="text-sm text-gray-500">{app.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900 font-medium">{app.appliedPosition}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-3">
                          {app.resumeLink && (
                            <button
                              onClick={() => handleViewResume(app.resumeLink)}
                              className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Resume
                            </button>
                          )}
                          {app.videoUrl ? (
                            <button
                              onClick={() => handleViewVideo(app)}
                              className="inline-flex items-center px-3 py-1.5 border border-purple-200 shadow-sm text-xs font-medium rounded-lg text-purple-700 bg-purple-50 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              Video
                            </button>
                          ) : app.status === "topic_sent" ? (
                            <span className="inline-flex items-center px-3 py-1.5 border border-gray-200 text-xs font-medium rounded-lg text-gray-500 bg-gray-50">
                              Video Pending
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(app.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex flex-wrap gap-2">
                          {app.status === "applied" && (
                            <>
                              <button
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                onClick={() => handleDecision(app._id, "shortlist")}
                              >
                                Shortlist
                              </button>
                              <button
                                className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                onClick={() => handleDecision(app._id, "reject")}
                              >
                                Reject
                              </button>
                            </>
                          )}

                          {app.status === "resume_shortlisted" && (
                            <button
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              onClick={() => handleSendTopic(app._id)}
                            >
                              Send Topic
                            </button>
                          )}

                          {app.status === "topic_sent" && (
                            <span className="text-gray-500 text-sm">Awaiting Video Submission</span>
                          )}

                          {app.status === "video_submitted" && (
                            <button
                              className="inline-flex items-center px-3 py-1.5 border border-purple-200 shadow-sm text-xs font-medium rounded-lg text-purple-700 bg-purple-50 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                              onClick={() => handleViewVideo(app)}
                            >
                              Review Video
                            </button>
                          )}

                          {app.status === "video_shortlisted" && (
                            <div className="flex flex-col space-y-2">
                              <div className="flex flex-wrap gap-2">
                                <button
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                  onClick={() => handleNextStage(app._id, "technicalInterview")}
                                >
                                  Technical Interview
                                </button>
                                <button
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                  onClick={() => handleNextStage(app._id, "hrInterview")}
                                >
                                  HR Interview
                                </button>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                <button
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                  onClick={() => openOfferModal(app)}
                                >
                                  Offer
                                </button>

                                <button
                                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                  onClick={() => handleNextStage(app._id, "rejected")}
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          )}

                          {(app.status === "technicalInterview" || app.status === "hrInterview") && (
                            <div className="flex flex-wrap gap-2">
                              <button
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={() => handleNextStageClick(app, app.status)}
                              >
                                Reschedule Interview
                              </button>
                              <button
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                onClick={() => handleNextStage(app._id, app.status + "_cleared")}
                              >
                                Mark as Cleared
                              </button>
                            </div>
                          )}

                          {/* Technical Interview Completed - Show HR Interview Option */}
                          {app.status === "technicalInterview_cleared" && (
                            <div className="flex flex-col space-y-2">
                              <div className="flex flex-wrap gap-2">
                                <button
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                  onClick={() => handleNextStage(app._id, "hrInterview")}
                                >
                                  Schedule HR Interview
                                </button>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                <button
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                  onClick={() => openOfferModal(app)}
                                >
                                  Direct Offer
                                </button>
                                <button
                                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                  onClick={() => handleNextStage(app._id, "rejected")}
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          )}

                          {/* HR Interview Completed */}
                          {app.status === "hrInterview_cleared" && (
                            <div className="flex flex-wrap gap-2">
                              <button
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                onClick={() => openOfferModal(app)}
                              >
                                Offer Position
                              </button>
                              <button
                                className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                onClick={() => handleNextStage(app._id, "rejected")}
                              >
                                Reject
                              </button>
                            </div>
                          )}

                          {app.status === "video_rejected" && (
                            <span className="text-red-700 font-medium">Rejected</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Resume Modal */}
        {showResume && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl p-6 relative">
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Resume Preview</h2>
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src={currentResume}
                  className="w-full h-[70vh] rounded-lg"
                  title="Resume Preview"
                />
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-xl font-semibold mb-4 text-gray-900">Video Interview Review</h2>

              {/* Candidate Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900">{currentVideo.name}</h3>
                <p className="text-sm text-gray-600">{currentVideo.email}</p>
              </div>

              <div className="bg-gray-900 rounded-xl overflow-hidden mb-4">
                <video
                  src={currentVideo.url}
                  controls
                  className="w-full h-auto max-h-[40vh]"
                  controlsList="nodownload"
                />
              </div>

              {shouldShowSchedulingForm() && (
                <>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                    <h3 className="font-semibold text-blue-900 mb-3 text-lg">Schedule Next Interview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-sm font-medium text-blue-700 mb-1">Interview Date</label>
                        <input
                          type="date"
                          className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          value={interviewDetails.interviewDate}
                          onChange={(e) =>
                            setInterviewDetails({ ...interviewDetails, interviewDate: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-blue-700 mb-1">Interview Time</label>
                        <input
                          type="time"
                          className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          value={interviewDetails.interviewTime}
                          onChange={(e) =>
                            setInterviewDetails({ ...interviewDetails, interviewTime: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-1">Meeting Link</label>
                      <input
                        type="text"
                        placeholder="https://zoom.us/j/..."
                        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        value={interviewDetails.zoomLink}
                        onChange={(e) =>
                          setInterviewDetails({ ...interviewDetails, zoomLink: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors font-medium text-sm"
                      onClick={() => handleVideoDecision(currentVideo.applicantId, "reject")}
                    >
                      Reject Candidate
                    </button>
                    <button
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium text-sm"
                      onClick={() => handleVideoDecision(currentVideo.applicantId, "shortlist")}
                    >
                      Shortlist & Schedule
                    </button>
                  </div>
                </>
              )}

              {currentVideo.status === "video_rejected" && (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-red-700 font-semibold">This candidate has been rejected</p>
                </div>
              )}

              {currentVideo.status === 'video_shortlisted' && (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-green-700 font-semibold mb-2">This candidate has been shortlisted for the next round</p>
                  <p className="text-gray-600 text-sm">You can schedule their interview using the options in the table.</p>
                </div>
              )}
            </div>
          </div>
        )}


        {/* Technical/HR Modal */}
        {showStageModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative">
              <button
                onClick={() => setShowStageModal(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-2">
                <div className={`w-12 h-12 rounded-full ${currentStage === "technicalInterview" ? 'bg-orange-100' : 'bg-cyan-100'} flex items-center justify-center mx-auto mb-3`}>
                  <svg className={`w-6 h-6 ${currentStage === "technicalInterview" ? 'text-orange-600' : 'text-cyan-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {currentStage === "technicalInterview" ? "Technical Interview" : "HR Interview"}
                </h2>
                <p className="text-gray-600 mt-1">
                  {currentStageApplicant?.technicalInterview?.interviewDate || currentStageApplicant?.hrInterview?.interviewDate
                    ? "Reschedule interview details"
                    : "Schedule interview details"}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interview Date</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={stageInterviewDetails.interviewDate}
                    onChange={(e) =>
                      setStageInterviewDetails({ ...stageInterviewDetails, interviewDate: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interview Time</label>
                  <input
                    type="time"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={stageInterviewDetails.interviewTime}
                    onChange={(e) =>
                      setStageInterviewDetails({ ...stageInterviewDetails, interviewTime: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Link</label>
                  <input
                    type="text"
                    placeholder="https://zoom.us/j/..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={stageInterviewDetails.zoomLink}
                    onChange={(e) =>
                      setStageInterviewDetails({ ...stageInterviewDetails, zoomLink: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                  onClick={handleNextStageSubmit}
                >
                  {currentStageApplicant?.technicalInterview?.interviewDate || currentStageApplicant?.hrInterview?.interviewDate
                    ? "Reschedule Interview"
                    : "Save & Schedule Interview"}
                </button>
                <button
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors font-medium"
                  onClick={handleMarkInterviewClear}
                >
                  Mark Interview as Cleared
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Offer Modal */}
        {showOfferModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeOfferModal}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Create Offer Letter</h2>
                <p className="text-gray-600 mt-1">Fill in the details for {selectedApplicant?.name}'s offer letter</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Personal Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-800 border-b pb-2">Personal Details</h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Candidate Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={offerFormData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role/Position *
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={offerFormData.role}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Joining *
                    </label>
                    <input
                      type="date"
                      name="dateOfJoining"
                      value={offerFormData.dateOfJoining}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="3 months">3 Months</option>
                      <option value="6 months">6 Months</option>
                      <option value="1 year">1 Year</option>
                    </select>
                  </div>
                </div>

                {/* Salary Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-800 border-b pb-2">
                    Salary Details
                    <span className="text-sm font-normal text-gray-500 ml-2">(Optional Fields)</span>
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CTC (Cost to Company)
                      <span className="text-gray-400 text-xs ml-1">Optional</span>
                    </label>
                    <input
                      type="text"
                      name="ctc"
                      value={offerFormData.ctc}
                      onChange={handleInputChange}
                      placeholder="₹25,000 (Optional)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Basic Salary
                      <span className="text-gray-400 text-xs ml-1">Optional</span>
                    </label>
                    <input
                      type="text"
                      name="basicSalary"
                      value={offerFormData.basicSalary}
                      onChange={handleInputChange}
                      placeholder="₹12,000 (Optional)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      House Rent Allowance (HRA)
                      <span className="text-gray-400 text-xs ml-1">Optional</span>
                    </label>
                    <input
                      type="text"
                      name="houseRentAllowance"
                      value={offerFormData.houseRentAllowance}
                      onChange={handleInputChange}
                      placeholder="₹3,000 (Optional)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Provident Fund (PF)
                      <span className="text-gray-400 text-xs ml-1">Optional</span>
                    </label>
                    <input
                      type="text"
                      name="providentFund"
                      value={offerFormData.providentFund}
                      onChange={handleInputChange}
                      placeholder="₹1,500 (Optional)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Security Amount
                      <span className="text-gray-400 text-xs ml-1">Optional</span>
                    </label>
                    <input
                      type="text"
                      name="securityAmount"
                      value={offerFormData.securityAmount}
                      onChange={handleInputChange}
                      placeholder="₹500 (Optional)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Net Salary *
                    </label>
                    <input
                      type="text"
                      name="netSalary"
                      value={offerFormData.netSalary}
                      onChange={handleInputChange}
                      placeholder="₹17,000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Pay Cycle Details */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Pay Cycle Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pay Cycle From
                    </label>
                    <select
                      name="payCycleFrom"
                      value={offerFormData.payCycleFrom}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="25th">25th</option>
                      <option value="30th/31st">30th/31st</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Optional Fields Note */}
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> CTC, Basic Salary, HRA, Provident Fund, and Security Amount are optional fields.
                      If left empty, they will appear as "---" in the offer letter. Only Net Salary is required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end space-x-3 pt-6 mt-6 border-t">
                <button
                  onClick={closeOfferModal}
                  className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOfferSubmit}
                  className="px-6 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                >
                  Send Offer Letter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;