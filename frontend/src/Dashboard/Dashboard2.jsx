import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';

const Dashboard2 = () => {
    const [stats, setStats] = useState({
        counts: { total: 0, pending: 0, resolved: 0, rejected: 0, recent: 0 },
        designationStats: [],
        interestStats: []
    });
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({
        status: 'all',
        search: ''
    });
    const [error, setError] = useState('');

    // API base URL
    const API_BASE = 'http://localhost:5000/api';

    // Create axios instance
    const api = axios.create({
        baseURL: API_BASE,
        timeout: 10000,
    });

    // Colors for charts
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];
    const STATUS_COLORS = {
        pending: '#F59E0B',
        resolved: '#10B981',
        rejected: '#EF4444'
    };

    // Fetch dashboard stats
    const fetchStats = async () => {
        try {
            const response = await api.get('/book-demo/dashboard/stats');
            if (response.data.success) {
                setStats(response.data.data);
                setError('');
            }
        } catch (error) {
            console.error('Error fetching stats:', error);
            setError('Failed to load dashboard statistics');
        }
    };

    // Fetch requests with pagination
    const fetchRequests = async (page = 1) => {
        try {
            setLoading(true);
            const params = {
                page: page.toString(),
                limit: '10',
                ...(filters.status !== 'all' && { status: filters.status }),
                ...(filters.search && { search: filters.search })
            };

            const response = await api.get('/book-demo', { params });
            if (response.data.success) {
                setRequests(response.data.data.requests);
                setTotalPages(response.data.data.pagination.totalPages);
                setCurrentPage(response.data.data.pagination.currentPage);
                setError('');
            }
        } catch (error) {
            console.error('Error fetching requests:', error);
            setError('Failed to load requests');
        } finally {
            setLoading(false);
        }
    };

    // Update request status
    const updateStatus = async (id, newStatus) => {
        try {
            const response = await api.patch(`/book-demo/${id}/status`, { status: newStatus });
            
            if (response.data.success) {
                // Refresh data
                await Promise.all([fetchStats(), fetchRequests(currentPage)]);
                
                // Update selected request if open
                if (selectedRequest?._id === id) {
                    setSelectedRequest(response.data.data);
                }
                
                // Show success message
                setError('');
            }
        } catch (error) {
            console.error('Error updating status:', error);
            setError('Failed to update status');
        }
    };

    // Delete request
    const deleteRequest = async (id) => {
        if (window.confirm('Are you sure you want to delete this request?')) {
            try {
                const response = await api.delete(`/book-demo/${id}`);
                
                if (response.data.success) {
                    // Refresh data
                    await Promise.all([fetchStats(), fetchRequests(currentPage)]);
                    
                    // Close modal if deleted request was selected
                    if (selectedRequest?._id === id) {
                        setSelectedRequest(null);
                    }
                    
                    setError('');
                }
            } catch (error) {
                console.error('Error deleting request:', error);
                setError('Failed to delete request');
            }
        }
    };

    // Export to Excel
    const exportToExcel = async () => {
        try {
            const response = await api.get('/book-demo/export/pending', {
                responseType: 'blob'
            });

            // Create blob URL and download
            const blob = new Blob([response.data], { 
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
            });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `pending-requests-${new Date().toISOString().split('T')[0]}.xlsx`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            setError('');
        } catch (error) {
            console.error('Error exporting to Excel:', error);
            setError('Failed to export Excel file');
        }
    };

    // Refresh data
    const refreshData = () => {
        fetchStats();
        fetchRequests(currentPage);
    };

    useEffect(() => {
        fetchStats();
        fetchRequests();
    }, [filters]);

    if (loading && requests.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Demo Requests Dashboard</h1>
                            <p className="text-gray-600 mt-1">Manage and track all demo requests</p>
                        </div>
                        <div className="flex space-x-3">
                            <button
                                onClick={refreshData}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span>Refresh</span>
                            </button>
                            <button
                                onClick={exportToExcel}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Export Excel</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-red-800">{error}</span>
                            </div>
                            <button
                                onClick={() => setError('')}
                                className="text-red-600 hover:text-red-800"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                    <StatCard
                        title="Total Requests"
                        value={stats.counts.total}
                        color="blue"
                        icon=""
                    />
                    <StatCard
                        title="Pending"
                        value={stats.counts.pending}
                        color="amber"
                        icon=""
                    />
                    <StatCard
                        title="Resolved"
                        value={stats.counts.resolved}
                        color="green"
                        icon=""
                    />
                    <StatCard
                        title="Rejected"
                        value={stats.counts.rejected}
                        color="red"
                        icon=""
                    />
                    <StatCard
                        title="Recent (7 days)"
                        value={stats.counts.recent}
                        color="purple"
                        icon=""
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Designation Distribution */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Designation Distribution</h3>
                        <div className="h-80">
                            {stats.designationStats.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={stats.designationStats}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="count"
                                        >
                                            {stats.designationStats.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="h-full flex items-center justify-center text-gray-500">
                                    No data available
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Interest Areas */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Interest Areas</h3>
                        <div className="h-80">
                            {stats.interestStats.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={stats.interestStats}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="_id" angle={-45} textAnchor="end" height={80} />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="count" name="Requests" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="h-full flex items-center justify-center text-gray-500">
                                    No data available
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search by name, email, school, or city..."
                                value={filters.search}
                                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <select
                            value={filters.status}
                            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="resolved">Resolved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>

                {/* Requests Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name & Contact
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        School & Location
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Interest
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {requests.length > 0 ? (
                                    requests.map((request) => (
                                        <RequestRow
                                            key={request._id}
                                            request={request}
                                            onView={() => setSelectedRequest(request)}
                                            onUpdateStatus={updateStatus}
                                            onDelete={deleteRequest}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                                            No requests found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {requests.length > 0 && (
                        <div className="bg-white px-6 py-4 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-700">
                                    Showing page {currentPage} of {totalPages} ({stats.counts.total} total requests)
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => fetchRequests(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => fetchRequests(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Request Detail Modal */}
            {selectedRequest && (
                <RequestDetailModal
                    request={selectedRequest}
                    onClose={() => setSelectedRequest(null)}
                    onUpdateStatus={updateStatus}
                    onDelete={deleteRequest}
                />
            )}
        </div>
    );
};

// Stat Card Component
const StatCard = ({ title, value, color, icon }) => {
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600 border-blue-200',
        amber: 'bg-amber-50 text-amber-600 border-amber-200',
        green: 'bg-green-50 text-green-600 border-green-200',
        red: 'bg-red-50 text-red-600 border-red-200',
        purple: 'bg-purple-50 text-purple-600 border-purple-200'
    };

    return (
        <div className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${colorClasses[color]}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-3xl font-bold mt-2">{value}</p>
                </div>
                <span className="text-2xl">{icon}</span>
            </div>
        </div>
    );
};

// Request Row Component
const RequestRow = ({ request, onView, onUpdateStatus, onDelete }) => {
    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800',
        resolved: 'bg-green-100 text-green-800',
        rejected: 'bg-red-100 text-red-800'
    };

    return (
        <tr className="hover:bg-gray-50 transition-colors duration-150">
            <td className="px-6 py-4 whitespace-nowrap">
                <div>
                    <div className="text-sm font-medium text-gray-900">{request.name}</div>
                    <div className="text-sm text-gray-500">{request.email}</div>
                    <div className="text-sm text-gray-500">{request.phoneNumber}</div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div>
                    <div className="text-sm font-medium text-gray-900">{request.schoolName}</div>
                    <div className="text-sm text-gray-500">{request.city}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{request.schoolAddress}</div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{request.scheduleCallFor}</div>
                <div className="text-sm text-gray-500">{request.designation}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(request.createdAt).toLocaleDateString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[request.status]}`}>
                    {request.status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                    <button
                        onClick={onView}
                        className="text-blue-600 hover:text-blue-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-blue-50"
                    >
                        View
                    </button>
                    {request.status === 'pending' && (
                        <>
                            <button
                                onClick={() => onUpdateStatus(request._id, 'resolved')}
                                className="text-green-600 hover:text-green-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-green-50"
                            >
                                Resolve
                            </button>
                            <button
                                onClick={() => onUpdateStatus(request._id, 'rejected')}
                                className="text-red-600 hover:text-red-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-red-50"
                            >
                                Reject
                            </button>
                        </>
                    )}
                    <button
                        onClick={() => onDelete(request._id)}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

// Request Detail Modal Component
const RequestDetailModal = ({ request, onClose, onUpdateStatus, onDelete }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Request Details</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    {/* Personal Information */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Personal Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoField label="Full Name" value={request.name} />
                            <InfoField label="Email" value={request.email} />
                            <InfoField label="Phone" value={request.phoneNumber} />
                            <InfoField label="Designation" value={request.designation} />
                        </div>
                    </div>

                    {/* School Information */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">School Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoField label="School Name" value={request.schoolName} />
                            <InfoField label="City" value={request.city} />
                            <InfoField label="School Address" value={request.schoolAddress} fullWidth />
                        </div>
                    </div>

                    {/* Request Details */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Request Details</h4>
                        <div className="space-y-4">
                            <InfoField label="Interest Area" value={request.scheduleCallFor} />
                            <InfoField label="Message" value={request.message || 'No message provided'} fullWidth />
                            <InfoField label="Status" value={request.status} />
                            <InfoField label="Submitted On" value={new Date(request.createdAt).toLocaleString()} />
                            <InfoField label="Last Updated" value={new Date(request.updatedAt).toLocaleString()} />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                        {request.status === 'pending' && (
                            <>
                                <button
                                    onClick={() => onUpdateStatus(request._id, 'resolved')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                                >
                                    Mark as Resolved
                                </button>
                                <button
                                    onClick={() => onUpdateStatus(request._id, 'rejected')}
                                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                                >
                                    Reject Request
                                </button>
                            </>
                        )}
                        <button
                            onClick={() => onDelete(request._id)}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                        >
                            Delete Request
                        </button>
                        <button
                            onClick={onClose}
                            className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-semibold border border-gray-300 transition-all duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Info Field Component for Modal
const InfoField = ({ label, value, fullWidth = false }) => (
    <div className={fullWidth ? 'col-span-2' : ''}>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="text-sm text-gray-900 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
            {value}
        </div>
    </div>
);

export default Dashboard2;