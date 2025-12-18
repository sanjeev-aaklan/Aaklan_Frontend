import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { 
  Upload, 
  Mail, 
  BookOpen, 
  Video, 
  CheckCircle, 
  Loader2,
  X,
  CloudUpload
} from "lucide-react";

const VideoUpload = () => {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-fill email and topic from URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEmail(params.get("email") || "");
    setTopic(params.get("topic") || "");
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    handleVideoFile(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    handleVideoFile(file);
  };

  const handleVideoFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      toast.error("Please upload a valid video file!");
      return;
    }

    // Check file size (max 100MB)
    if (file.size > 100 * 1024 * 1024) {
      toast.error("Video file size should be less than 100MB");
      return;
    }

    setVideoFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const removeVideo = () => {
    setVideoFile(null);
    setPreviewUrl("");
    setUploadProgress(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile) {
      toast.error("Please select a video to upload!");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("email", email);
    formData.append("topic", topic);

    try {
      setLoading(true);
      setUploadProgress(0);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/career/upload-video`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          },
        }
      );

      toast.success("🎉 Video uploaded successfully!");
      setVideoFile(null);
      setPreviewUrl("");
      setUploadProgress(0);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Upload failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <Video className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Video</h1>
          <p className="text-gray-600">Upload your response video for the interview process</p>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Email and Topic Info */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full bg-transparent border-none text-gray-900 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <BookOpen className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                <input
                  type="text"
                  value={topic}
                  readOnly
                  className="w-full bg-transparent border-none text-gray-900 text-sm focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Upload Area */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!videoFile ? (
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                  isDragging 
                    ? "border-blue-500 bg-blue-50 scale-105" 
                    : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById("video-input").click()}
              >
                <CloudUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Drop your video here
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  or click to browse files
                </p>
                <p className="text-xs text-gray-400">
                  Supported formats: MP4, MOV, AVI • Max size: 100MB
                </p>
                <input
                  id="video-input"
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-4">
                {/* Video Preview */}
                <div className="relative">
                  <video
                    src={previewUrl}
                    controls
                    className="w-full rounded-lg shadow-md"
                  />
                  <button
                    type="button"
                    onClick={removeVideo}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* File Info */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Video className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {videoFile.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>

                {/* Progress Bar */}
                {uploadProgress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Uploading...</span>
                      <span className="font-medium text-blue-600">{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !videoFile}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                loading || !videoFile
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  <span>Submit Video</span>
                </>
              )}
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Need help? Ensure your video is clear and addresses the topic properly.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <Video className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-xs text-gray-600">HD Quality</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <CloudUpload className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-xs text-gray-600">Fast Upload</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <CheckCircle className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-xs text-gray-600">Secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;