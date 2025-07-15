import { getQuestionsAnswersById } from "@/lib/services/api/questionAnswer";
import StatusCard from "./component/StatusSection";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function StudentStatusPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      // Only fetch if user is loaded and signed in
      if (!isLoaded || !isSignedIn || !user?.id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        console.log("Fetching data for user:", user.id); // Debug log

        const data = await getQuestionsAnswersById(user.id);
        console.log("Received data:", data); // Debug log

        setQuestions(data);
      } catch (err) {
        console.error("Error in useEffect:", err);
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoaded, isSignedIn, user?.id]);

  const statusData = [
    {
      status: "No Depression",
      description: "Mental health status indicates no signs of depression",
      severity: "normal",
    },
    {
      status: "Mild Level Depression",
      description: "Low-level depression symptoms detected",
      severity: "mild",
    },
    {
      status: "Moderate Level Depression",
      description: "Moderate depression symptoms requiring attention",
      severity: "moderate",
    },
    {
      status: "Severe Level Depression",
      description: "Severe depression symptoms requiring immediate care",
      severity: "severe",
    },
  ];

  const getStatusDescription = (rating) => {
    // Handle different rating formats
    let normalizedRating = rating;

    // If rating is "No", map it to "No Depression"
    if (rating === "No" || rating === "no" || rating === "No Depression") {
      normalizedRating = "No Depression";
    }
    // If rating is "mild", map it to "Mild Level Depression"
    else if (rating === "mild depression" || rating === "Mild depression") {
      normalizedRating = "Mild Level Depression";
    }
    // If rating is "moderate", map it to "Moderate Level Depression"
    else if (
      rating === "moderate depression" ||
      rating === "Moderate depression"
    ) {
      normalizedRating = "Moderate Level Depression";
    }
    // If rating is "severe", map it to "Severe Level Depression"
    else if (rating === "severe depression" || rating === "Severe depression") {
      normalizedRating = "Severe Level Depression";
    }

    return (
      statusData.find((item) => item.status === normalizedRating) || {
        status: "Unknown Status",
        description: "Unknown status",
        severity: "unknown",
      }
    );
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600">Loading your data...</p>
        </div>
      </div>
    );
  }

  // Show error if there's an error
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-sm border p-6 max-w-md mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Error Loading Data
            </h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Student Mental Health Status
            </h1>
            <p className="text-gray-600">
              Comprehensive overview of mental health assessments and current
              status indicators
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Info Section */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">
                {user.fullName?.charAt(0) || "U"}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {user.fullName}
              </h2>
              <p className="text-gray-600">
                Student ID: {user.id?.slice(0, 8) || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Status Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">
              Assessment Results
            </h3>
            <div className="text-sm text-gray-500">
              Total Assessments: {questions.length}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {questions.map((item, index) => {
              const detail = getStatusDescription(item.rating); // Get the matching status description and severity

              return (
                <div
                  key={index}
                  className="transform transition-all duration-200 hover:scale-[1.02]"
                >
                  <StatusCard
                    status={item.rating}
                    fullname={user.fullName}
                    description={detail.description}
                    severity={detail.severity}
                    _id={item._id}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Assessment Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {questions.map((item, index) => {
              const detail = getStatusDescription(item.rating);

              return (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div
                    className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                      item.rating === "No" || item.rating === "No Depression"
                        ? "bg-green-500"
                        : item.rating === "mild" ||
                          item.rating === "Mild Level Depression"
                        ? "bg-yellow-500"
                        : item.rating === "moderate" ||
                          item.rating === "Moderate Level Depression"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                  ></div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.rating}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {detail.severity}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Information */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900">Important Note</h4>
              <p className="text-blue-700 text-sm mt-1">
                These assessments are for informational purposes only. If you
                are experiencing severe symptoms, please consult with a
                qualified mental health professional immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentStatusPage;
