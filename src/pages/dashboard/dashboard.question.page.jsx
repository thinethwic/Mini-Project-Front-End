import QuestionSection from "./component/QuestionSection";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Calendar } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

function QuestionDashboardPage() {
  const { user } = useUser();

  // Mock data - replace with actual data from your API
  const dashboardStats = {
    totalQuestions: 12,
    completedQuestions: 8,
    timeSpent: "24 mins",
    accuracy: "85%",
    lastSession: "2 hours ago",
  };

  const getCompletionPercentage = () => {
    return Math.round(
      (dashboardStats.completedQuestions / dashboardStats.totalQuestions) * 100
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Assessment Dashboard
                </h1>
              </div>
              <p className="text-gray-600 text-lg">
                Welcome back, {user?.firstName || "User"}! Track your progress
                and complete your assessments.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Last session: {dashboardStats.lastSession}</span>
              </div>
              <Badge variant="secondary" className="px-3 py-1">
                {getCompletionPercentage()}% Complete
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Question Section */}
      <QuestionSection />
    </div>
  );
}

export default QuestionDashboardPage;
