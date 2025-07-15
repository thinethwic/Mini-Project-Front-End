import { useEffect, useState } from "react";
import MedicationCard from "./component/MedicationSection";
import { FaPills, FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { useParams } from "react-router-dom";

const getApplication = async (id) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch(`http://localhost:8000/questionAnswer/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const application = await res.json();
  return application;
};

function MedicationPage() {
  const [Application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    getApplication(params.id)
      .then((data) => {
        setApplication(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Error fetching application:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your treatment plan...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading data: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Show message if no application data
  if (!Application) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No application data found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaPills className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Medication & Treatment Center
                </h1>
                <p className="text-gray-600">
                  Comprehensive mental health treatment plans and medication
                  management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <div className="p-3 bg-blue-100 rounded-full mx-auto mb-3 w-fit">
              <FaStethoscope className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">AI Analysis</h3>
            <p className="text-sm text-gray-600">
              Advanced diagnostic insights
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <div className="p-3 bg-green-100 rounded-full mx-auto mb-3 w-fit">
              <FaHeartbeat className="text-green-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Personalized Care
            </h3>
            <p className="text-sm text-gray-600">Tailored treatment plans</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <div className="p-3 bg-purple-100 rounded-full mx-auto mb-3 w-fit">
              <FaPills className="text-purple-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Medication</h3>
            <p className="text-sm text-gray-600">Safe & effective treatments</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <div className="p-3 bg-orange-100 rounded-full mx-auto mb-3 w-fit">
              <FaUserMd className="text-orange-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Expert Care</h3>
            <p className="text-sm text-gray-600">Professional oversight</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="space-y-8">
          {/* Introduction Card */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Your Personalized Treatment Plan
                </h2>
                <p className="text-gray-600 mb-4">
                  Based on your mental health assessment, our AI system has
                  generated a comprehensive treatment plan tailored to your
                  specific needs. This plan includes lifestyle recommendations,
                  therapeutic interventions, and professional guidance to
                  support your mental wellness journey.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>AI-Generated</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Personalized</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Evidence-Based</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Card */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                Current Treatment Plan
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Review your personalized recommendations and treatment options
              </p>
            </div>

            <div className="p-0">
              <MedicationCard status={Application.rating} />
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-600">
                  Access to mental health crisis support and emergency resources
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-2">
                  Educational Materials
                </h4>
                <p className="text-sm text-gray-600">
                  Learn about mental health conditions and treatment options
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-2">
                  Progress Tracking
                </h4>
                <p className="text-sm text-gray-600">
                  Monitor your treatment progress and wellness journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicationPage;
