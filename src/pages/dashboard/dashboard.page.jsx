import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Calendar,
  TrendingUp,
  Clock,
  Target,
  Activity,
  User,
  CheckCircle2,
  ArrowRight,
  Heart,
  Shield,
  BookOpen,
  Users,
  Star,
  Timer,
} from "lucide-react";

import { Link } from "react-router-dom";

function HomeDashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  // Mock data - replace with actual API data
  const userStats = {
    assessmentsCompleted: 3,
    totalAssessments: 8,
    lastLoginDate: new Date().toLocaleDateString(),
    lastLoginTime: new Date().toLocaleTimeString(),
    streakDays: 7,
    totalTimeSpent: "2h 45m",
    averageScore: 85,
    joinDate: "March 2024",
  };

  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const getCompletionPercentage = () => {
    return Math.round(
      (userStats.assessmentsCompleted / userStats.totalAssessments) * 100
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-medium text-underlay-1">
                    UniMind AI
                  </h1>
                  <p className="text-blue-100">
                    Mental Health Assessment Platform
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {getWelcomeMessage()}, {user.firstName}!
                </h2>
                <p className="text-blue-100 text-lg">
                  Ready to continue your mental wellness journey?
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span>Last login: {userStats.lastLoginDate}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>{userStats.lastLoginTime}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                  <Timer className="w-4 h-4" />
                  <span>{userStats.streakDays} day streak</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">
                      {userStats.assessmentsCompleted}/
                      {userStats.totalAssessments}
                    </div>
                    <p className="text-blue-100 mb-4">Assessments Completed</p>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${getCompletionPercentage()}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-blue-100 mt-2">
                      {getCompletionPercentage()}% Complete
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Time
                  </p>
                  <p className="text-2xl font-bold text-purple-600">
                    {userStats.totalTimeSpent}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Average Score
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {userStats.averageScore}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Streak Days
                  </p>
                  <p className="text-2xl font-bold text-orange-600">
                    {userStats.streakDays}
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Member Since
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {userStats.joinDate}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Take Assessment
                    </h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Continue your mental health evaluation
                    </p>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                      <Link to={"/dashboard/question"}>Start Now </Link>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">View Results</h3>
                    <p className="text-green-100 text-sm mb-4">
                      Check your assessment history
                    </p>
                    <Button className="bg-white text-green-600 hover:bg-green-50">
                      <Link to={"/dashboard/status"}> View Details </Link>{" "}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About Section */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    About UniMind AI
                  </h2>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  A groundbreaking depression detection tool designed
                  specifically for university students, developed by third-year
                  HICT students from Gampaha Wickramarachchi University of
                  Indigenous Medicine.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  This innovative platform leverages advanced AI technology to
                  address mental health challenges in academic environments,
                  promoting mental well-being and fostering a supportive campus
                  atmosphere.
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>Evidence-based</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>Student-focused</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      AI-powered depression screening
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Personalized recommendations
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Progress tracking & analytics
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Confidential & secure platform
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default HomeDashboardPage;
