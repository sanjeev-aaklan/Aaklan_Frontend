import React from 'react'

const StatusCount = ({ applicants }) => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
                {/* Total Applicants */}
                <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">Total Applicants</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {applicants.length}
                            </p>
                        </div>
                        <div className="p-2 bg-gray-50 rounded-lg">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Resume Shortlisted */}
                <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">Resume Shortlisted</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {applicants.filter(a => a.status === 'resume_shortlisted').length}
                            </p>
                        </div>
                        <div className="p-2 bg-amber-50 rounded-lg">
                            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Video pending*/}
                <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">Video Panding</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {applicants.filter(a => a.status === 'resume_shortlisted').length}
                            </p>
                        </div>
                        <div className="p-2 bg-green-50 rounded-lg">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Technical Interview  pending*/}
                <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">Technical Panding</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {applicants.filter(a => a.status === 'video_shortlisted').length}
                            </p>
                        </div>
                        <div className="p-2 bg-orange-50 rounded-lg">
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* HR Interview Panding*/}
                <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">HR Panding</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {applicants.filter(a => a.status === 'technicalInterview_cleared').length}
                            </p>
                        </div>
                        <div className="p-2 bg-cyan-50 rounded-lg">
                            <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Offered */}
                <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">Offered</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {applicants.filter(a => a.status === 'offered').length}
                            </p>
                        </div>
                        <div className="p-2 bg-green-50 rounded-lg">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Rejected */}
                <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-600">Rejected</p>
                            <p className="text-xl font-semibold text-gray-900">
                                {applicants.filter(a => a.status === 'rejected' || a.status === 'resume_rejected' || a.status === 'video_rejected').length}
                            </p>
                        </div>
                        <div className="p-2 bg-red-50 rounded-lg">
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default StatusCount